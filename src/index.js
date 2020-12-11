import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import './index.css';
import './fonts/RINGM___.TTF';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RootStore} from "./stores/RootStore";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <Provider rootStore = {new RootStore()}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
