
const ADD_TO_CART = 'ADD_TO_CART'
const INITIAL_STATE = {
    cartTotal: 0
}
export const addPrice = price => ({
    type: ADD_TO_CART,
    price
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {cartTotal: state.cartTotal + action.price}
        default:
            return state
    }
}