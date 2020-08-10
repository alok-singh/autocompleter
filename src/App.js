/* eslint-disable no-template-curly-in-string */
import React from "react";
import MovieAutoCompleter from "./containers/movieAutoCompleter";

// config
import { API_DEBOUNCE_TIME, AUTOCOMPLETER_API_URL } from "./config/vars";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="main">
        <MovieAutoCompleter 
          debounceTime={API_DEBOUNCE_TIME}
          apiUrl={AUTOCOMPLETER_API_URL}
          dataModel="searchAPIParser"
        />
      </section>
    </div>
  );
}

export default App;
