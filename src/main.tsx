import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(combineReducers({}));
ReactDOM.render(
    <Provider store={store}>
    </Provider>,
    document.getElementById('root'));