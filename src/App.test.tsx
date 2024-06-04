import React from 'react';
import {render, screen} from '@testing-library/react';
import StartPage from "./router/pages/StartPage";

test('renders learn react link', () => {
  render(<StartPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
