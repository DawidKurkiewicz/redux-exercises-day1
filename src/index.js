import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import todos from './store'


const RootReducer = combineReducers({
    todos
})
const store = createStore(() => {})


ReactDOM.render(<App />, document.getElementById('root'));

