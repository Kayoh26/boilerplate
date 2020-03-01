import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const reducer = (state = {}, action) => {
  return state
};

const store = createStore (
  reducer,
  applyMiddleware(
    createLogger({collapsed: true}),
    thunkMiddleware
  )
);

export default store;
