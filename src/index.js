import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content'
import Menu from './menu'
import './scss/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);