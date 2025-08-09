import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import keys from './keys/keys';
import ReactGA from 'react-ga';
import App from './App';

const initializeReactGA = () => {
  if (keys.gaTrackingCode) {  // Changed from REACT_APP_GA_TRACKING_CODE to gaTrackingCode
    ReactGA.initialize(keys.gaTrackingCode);
  }
}

const rootElement = document.getElementById("root");
initializeReactGA();

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}