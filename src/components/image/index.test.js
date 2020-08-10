import React from 'react';
import { render } from '@testing-library/react';
import Image from './index';
import { API_DEBOUNCE_TIME, AUTOCOMPLETER_API_URL } from "../../config/vars";

test('unit tests for image components', () => {
  expect(render(<Image />).baseElement).toMatchSnapshot();
});

test('unit tests for image components with className component', () => {
  expect(render(<Image className="my-image" />).baseElement).toMatchSnapshot();
});