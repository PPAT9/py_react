import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducer';

let createStoreWithMiddleware = compose(applyMiddleware(promise(), thunkMiddleware))(createStore);
const store = createStoreWithMiddleware(rootReducer);
export default store;