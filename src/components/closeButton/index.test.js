import React from 'react';
import { render } from '@testing-library/react';
import CloseButton from './index';

test('Unit tests for close button', () => {
  expect(render(<CloseButton />).baseElement).toMatchSnapshot();
});
