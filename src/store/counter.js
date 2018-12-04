const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'


export const increment = (value = 1) => ({
    type: INCREMENT,
    value
})


export const decrement = (value = 1) => ({
    type: DECREMENT,
    value
})

export const reset = () => ({
    type: RESET
})


export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + action.value)
        case DECREMENT:
            return (state - action.value)
        case RESET:
            return (state = 0)
        default:
            return state
    }

}