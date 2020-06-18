import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/HelveticaNeueCyr.ttf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import PWAPrompt from 'react-ios-pwa-prompt';
import InstallPWA from './pwa';
import { hotjar } from 'react-hotjar';
import { Provider } from "react-redux";
import { store } from "./redux/store";

hotjar.initialize(1577205, 6);

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  ReactDOM.hydrate(
    // <React.StrictMode>
      <BrowserRouter>
        <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
        <InstallPWA />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    // </React.StrictMode>,
    root);
} else {
  ReactDOM.render(
    // <React.StrictMode>
      <BrowserRouter>
        <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
        <InstallPWA />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    // </React.StrictMode>,
    root);
}

serviceWorker.register();

