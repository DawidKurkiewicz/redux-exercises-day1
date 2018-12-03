const ADD_TODO = 'ADD_TODO'


export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = {text : action.text, completed: false }
            return [...state, newTodo];
        default:
            return state
    }
}