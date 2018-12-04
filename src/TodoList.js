import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/todos'
import { toggleTodo } from './store/todos'
import { deleteTodo } from './store/todos'




const mapStateToProps = store => ({
    _todos: store.todos.allTodos,
})


const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index))

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
    handleDelete = index => {
        this.props._deleteTodo(index)
    }

    render() {

        return <div>
            {this.renderInput()}
            {this.renderList()}
        </div>

    }
    renderInput() {
        return <div>
            <input onChange={this.handleInputChange} />
            <button
                onClick={this.handleButtonClick}>
                add Todo
            </button>
        </div>
    }


    renderList() {
        return this.props._todos.map((todo, index) =>
            <div
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                key={todo.text}>
                <div onClick={() => this.handleTodoClick(index)}> {todo.text}</div>


                <button
                    type="button"
                    onClick={() => this.handleDelete(index)}> x </button>

            </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)