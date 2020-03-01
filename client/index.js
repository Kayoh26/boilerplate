import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
// import '../public/style.css'

ReactDOM.render(
  <Provider store = {store}>
    <div>Hello!!!</div>
  </Provider>,
  document.getElementById('app')
);
