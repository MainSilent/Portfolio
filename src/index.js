import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Content from './content'
import Menu from './menu'
import './scss/index.scss'

ReactDOM.render(
  <Router>
    <Menu />
    <Content />
  </Router>,
  document.getElementById('root')
);