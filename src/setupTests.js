// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import App from "./App/App";
import { Router} from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Testing the Nav', () => {
  it('testing trails route', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe('/')
    const trailsNavButton = document.querySelector('#trails-button')
    expect(trailsNavButton).toBeInTheDocument();
    console.log(trailsNavButton);
    fireEvent.click(trailsNavButton);
    expect(history.location.pathname).toBe('/trails')
    // '/'
  });
})
