var React = require('react');
var ReactDOM = require('react-dom');
import store from './store';
import { Provider } from 'react-redux';

import App from './app'


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    wrapper) : false;