import React from 'react';
import { render } from '@testing-library/react';
import Input from './index';

test('Unit tests for Input component', () => {
  expect(render(<Input 
    value="some text"
    onChange={() => {}}
  />).baseElement).toMatchSnapshot();
});
