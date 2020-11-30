import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStore} from "./stores/RootStore";
import {Provider} from "mobx-react";

ReactDOM.render(
  <React.StrictMode>
      <Provider rootStore = {new RootStore()}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
