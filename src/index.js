import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'
import todos, { addTodo, filterTodos, toggleTodo, deleteTodo } from './store/todos'
import counter, { increment, decrement, reset } from './store/counter'
import cart, { addPrice } from './store/cart'
import { Provider } from 'react-redux'


const rootReducer = combineReducers({
    todos,
    counter,
    cart
})
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())



store.dispatch(addTodo('buy food'))
store.dispatch(addTodo('clean home'))
store.dispatch(addTodo('buy smth else'))
store.dispatch(addTodo('do smth else'))






window.increaseCounter = () => store.dispatch(increment())
window.addTodo = (text) => store.dispatch(addTodo(text))
window.decreaseCounter = () => store.dispatch(decrement())
window.reset = () => store.dispatch(reset())
window.addPrice = (title, price) => store.dispatch(addPrice(title, price))
window.filterTodos = text => store.dispatch(filterTodos(text))
window.toggleTodo = index => store.dispatch(toggleTodo(index))
window.deleteTodo = index => store.dispatch(deleteTodo(index))







ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

