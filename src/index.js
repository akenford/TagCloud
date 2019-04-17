// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// reducer
import mainReducer from './reducers';

// logger
import logger from 'redux-logger'

// app
import App from './App'

// store
const store = createStore(
    mainReducer,
    applyMiddleware(
        thunk,
        logger
    )
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
