import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import todos, { addTodo } from './store/todos'
import counter, { increment, decrement, reset } from './store/counter'
import cart, { addPrice } from './store/cart'


const rootReducer = combineReducers({
    todos,
    counter,
    cart
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())


store.dispatch(addTodo('Go shopping'))
store.dispatch(addTodo('some other thing'))
store.dispatch(addTodo('clean the house'))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())







window.increaseCounter = () => store.dispatch(increment())
window.addTodo = (text) => store.dispatch(addTodo(text))
window.decreaseCounter = () => store.dispatch(decrement())
window.reset = () => store.dispatch(reset())
window.addPrice = (title, price) => store.dispatch(addPrice(title, price))





ReactDOM.render(<App />, document.getElementById('root'));

