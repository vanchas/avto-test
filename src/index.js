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

const root = document.getElementById("root");

// if (root.hasChildNodes()) {
//   ReactDOM.hydrate(
//     <React.StrictMode>
//       <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
//       <InstallPWA />

//       <BrowserRouter>
//         <App />
//       </BrowserRouter>,
//     </React.StrictMode>,
//     root);
// } else {
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false} />
    <InstallPWA />

    <App />
  </BrowserRouter>,
  // </React.StrictMode>,
  root);
// }

serviceWorker.register();

