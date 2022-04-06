import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <wc-toast></wc-toast>
  </React.StrictMode>,
  document.getElementById('root')
);