import React from 'react'
import { connect } from 'react-redux'
import { increment } from './store/counter'
import { decrement } from './store/counter'
import { reset } from './store/counter'



const mapStateToProps = store => ({
    _counterValue: store.counter
})


const mapDispatchToProps = dispatch => ({
    _increment: () => dispatch(increment()),
    _decrement: () => dispatch(decrement()),
    _reset: () => dispatch(reset())


})

const Counter = props => {
    return <div>
        <div>Count state: {props._counterValue}</div>
        <button onClick={props._increment}>+</button>
        <button onClick={props._decrement}>-</button>
        <button onClick={props._reset}>reset</button>

    </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)