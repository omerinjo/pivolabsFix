var React = require('react');
var ReactDOM = require('react-dom');

import App from './app'


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;