import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import todos, { addTodo} from './store'


const rootReducer = combineReducers({
    todos
})
const store = createStore(rootReducer)


console.warn(store.getState())
store.dispatch(addTodo('Go shopping'))
store.dispatch(addTodo('some other thing'))
store.dispatch(addTodo('clean the house'))
console.warn(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));

