import React from 'react';
import { render } from '@testing-library/react';
import AutoCompleter from './index';
import { API_DEBOUNCE_TIME, AUTOCOMPLETER_API_URL } from "../../config/vars";

test('renders learn react link', () => {
  expect(render(<AutoCompleter
    debounceTime={API_DEBOUNCE_TIME}
    apiUrl={AUTOCOMPLETER_API_URL}
    dataModel="searchAPIParser"
  />).baseElement).toMatchSnapshot();
});
