import React from 'react';
import ReactDOM from 'react-dom';
//组件，大写字母开头。react规范，组件都要以大写开头
import TodoList from './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);