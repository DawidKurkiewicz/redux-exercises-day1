import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import todos, { addTodo} from './store'


const RootReducer = combineReducers({
    todos
})
const store = createStore(() => {})


console.warn(store.getState())
store.dispatch(addTodo('Go shopping'))

ReactDOM.render(<App />, document.getElementById('root'));

