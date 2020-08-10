import React from 'react';
import { render } from '@testing-library/react';
import Tag from './index';

test('Unit testing for tag component', () => {
  expect(render(<Tag 
    value="selected movie"
    onClickCross={() => {}}
  />).baseElement).toMatchSnapshot();
});
