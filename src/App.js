/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import Input from "./components/input";
import AutoCompleaterItem from './components/listItem';
import Tag from "./components/tag";

// utils
import { filterUniqueItems } from './utils/filterUniqueItems';
import { request } from "./utils/request";

// config
import { API_DEBOUNCE_TIME, AUTOCOMPLETER_API_URL } from './config/vars';

import "./App.css";

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [timeoutForAPICall, setTimeoutForAPICall] = useState(false);
  const [responseList, setResponseList] = useState([]);

  const sendAPIcallForInputChange = () => {
    if(!(inputValue && inputValue.length > 2)) {
      setResponseList([]);
      return;
    }
    if (timeoutForAPICall) {
      clearTimeout(timeoutForAPICall);
    }
    setTimeoutForAPICall(setTimeout(async () => {
      try {
        const data = await request(AUTOCOMPLETER_API_URL.replace('${KEYWORD}', inputValue), {});
        const modeledResponse = data.map(item => ({
          title: item.Title,
          year: item.Year,
          imdbID: item.imdbID,
          type: item.Type,
          poster: item.Poster
        }));
        setResponseList(modeledResponse);
      } catch (error) {
        console.log(error);
        setResponseList([]);
      }
    }, API_DEBOUNCE_TIME));
  }

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if (!event.target.closest('.list-item') && !event.target.closest('.tag-input-wrapper')) {
        setIsListVisible(false);
      }
    })
  }, []);

  return (
    <div className="App">
      <section className="main">
        <div className="tag-input-wrapper">
          {tagList && tagList.map(item => {
            return <Tag value={item.title} onClickCross={() => {
              setTagList(tagList.filter(taggedItem => taggedItem.imdbID !== item.imdbID))
            }} />;
          })}
          <Input
            value={inputValue}
            onFocus={() => {
              setIsListVisible(true);
            }}
            onChange={({ target }) => {
              setInputValue(target.value);
              sendAPIcallForInputChange(target.value);
            }}
          />
        </div>
        {isListVisible && responseList && responseList.length ? <div className="autocompleter-wrapper">
          {responseList.map(item => {
            return <AutoCompleaterItem 
              imageSrc={item.poster}
              title={item.title}
              type={item.type}
              year={item.year}
              onClickItem={() => {
                if (tagList.length < 5) {
                  setTagList(filterUniqueItems([...tagList, responseList.find(searchItem => searchItem.imdbID === item.imdbID)], 'imdbID'));
                }
              }}
            />;
          })}
        </div> : null}
      </section>
    </div>
  );
}

export default App;
