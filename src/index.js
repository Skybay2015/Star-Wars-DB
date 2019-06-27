import React from 'react';
import ReactDOM from 'react-dom'
import App from './App/App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import rootReducer from './Store/reducers/rootReducer'
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),

);
const store = createStore(rootReducer, enhancer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'))