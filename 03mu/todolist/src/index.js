import React from 'react';
import ReactDOM from 'react-dom';
//APP组件，大写字母开头。react规范，组件都要以大写开头
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);