import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {TableProvider} from "./stores/TableContext";

ReactDOM.render(
  <React.StrictMode>
      <TableProvider>
          <App />
      </TableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
