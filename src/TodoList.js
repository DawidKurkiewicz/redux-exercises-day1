import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './store/todos'
import { toggleTodo } from './store/todos'
import { deleteTodo } from './store/todos'
import { filterTodos } from './store/todos'





const mapStateToProps = store => ({
    _todos: store.todos.visibleTodos,
})


const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index)),
    _filterTodos: text => dispatch(filterTodos(text))


})

class TodoList extends React.PureComponent {

    state = { 
        value: '',
        search: '' }

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

    handleInputSearchChange =  event => {
        this.setState({ search: event.target.value })
    }

    handleButtonSearchClick = () => {
        this.props._filterTodos(this.state.search)
    }


    render() {

        return <div>
            {this.renderFilterTodos()}
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
    renderFilterTodos() {
        return <div>
            <input onChange={this.handleInputSearchChange} />
            <button
                onClick={this.handleButtonSearchClick}>
                search
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