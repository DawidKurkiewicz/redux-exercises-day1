import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/todos'
import { toggleTodo } from './store/todos'



const mapStateToProps = store => ({
    _todos: store.todos.allTodos,
})


const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index))
})

class TodoList extends React.PureComponent {

    state = { value: '' }

    handleInputChange = event => {
        this.setState({ value: event.target.value })
    }
    handleButtonClick = event => {
        console.log('want to save todo: ', this.state.value)
        this.props._addTodo(this.state.value)
    }


handleTodoClick = index => {
this.props._toggleTodo(index)
}

    render() {

        return <div>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}> add Todo </button>
            {this.props._todos.map((todo, index) =>
                <div
                style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}
                onClick ={ () => this.handleTodoClick(index)}
                key={todo.text}> {todo.text}</div>
            )}
        </div>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)