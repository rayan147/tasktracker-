import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from '../src/reportWebVitals'
import {Provider} from "react-redux"
import Store from "./store"
import "./index.css";
import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #c73e1d;
    background-image: linear-gradient(315deg, #c73e1d 0%, #a23b72 37%, #2e86ab 100%);
    ;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

$(document).bind("DOMNodeRemoved", function(e) {
  console.log("Removed: " + e.target.nodeName);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
