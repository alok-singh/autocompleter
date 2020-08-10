/* eslint-disable no-template-curly-in-string */

import React, { useState, useEffect } from "react";
import Input from "../../components/input";
import AutoCompleaterItem from "../../components/listItem";
import Tag from "../../components/tag";

// utils
import { filterUniqueItems } from "../../utils/filterUniqueItems";
import { request } from "../../utils/request";
import dataModels from "../../utils/dataModal";

import "./index.css";

const AutoCompleter = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const [timeoutForAPICall, setTimeoutForAPICall] = useState(false);
  const [responseList, setResponseList] = useState([]);

  const sendAPIcallForInputChange = (value) => {
    if (!inputValue) {
      setResponseList([]);
      return;
    }
    if (timeoutForAPICall) {
      clearTimeout(timeoutForAPICall);
    }
    setTimeoutForAPICall(
      setTimeout(async () => {
        try {
          const data = await request(
            props.apiUrl.replace("${KEYWORD}", value),
            {}
          );
          const modeledResponse = dataModels[props.dataModel](data);
          setResponseList(modeledResponse);
        } catch (error) {
          console.log(error);
          setResponseList([]);
        }
      }, props.debounceTime)
    );
  };

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (
        !event.target.closest(".list-item") &&
        !event.target.closest(".tag-input-wrapper")
      ) {
        setIsListVisible(false);
      }
    });
  }, []);

  return (
    <section className="movie-autocompleter-container">
      <div className="tag-input-wrapper">
        {tagList &&
          tagList.map((item) => {
            return (
              <Tag
                key={item.imdbID}
                value={item.title}
                onClickCross={() => {
                  setTagList(
                    tagList.filter(
                      (taggedItem) => taggedItem.imdbID !== item.imdbID
                    )
                  );
                }}
              />
            );
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
      {isListVisible && responseList && responseList.length ? (
        <div className="autocompleter-wrapper">
          {responseList.map((item) => {
            return (
              <AutoCompleaterItem
                key={item.imdbID}
                imageSrc={item.poster}
                title={item.title}
                type={item.type}
                year={item.year}
                onClickItem={() => {
                  if (tagList.length < 5) {
                    setTagList(
                      filterUniqueItems(
                        [
                          ...tagList,
                          responseList.find(
                            (searchItem) => searchItem.imdbID === item.imdbID
                          ),
                        ],
                        "imdbID"
                      )
                    );
                  }
                }}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default AutoCompleter;
