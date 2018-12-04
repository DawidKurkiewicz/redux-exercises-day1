import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/todos'




const mapDispatchToProps = dispatch => ({
addTodo: text => dispatch(addTodo(text))
})

class TodoList extends React.PureComponent {

    state = { value: '' }

    handleInputChange = event => {
        this.setState({ value: event.target.value })
    }
    handleButtonClick = event => {
        console.log('want to save todo: ', this.state.value)
        this.props.addTodo(this.state.value)
    }




    render() {

        return <div>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}> add Todo </button>
            {this.props.todos.map(todo =>
                <div key={todo.text}> {todo.text}</div>
            )}
        </div>
    }
}
export default connect(null, mapDispatchToProps)(TodoList)