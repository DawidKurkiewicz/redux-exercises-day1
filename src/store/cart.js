const ADD_TO_CART = 'ADD_TO_CART'
const INITIAL_STATE = {
    cartTotal: 0,
    items: []
}
export const addPrice = (title, price) => ({
    type: ADD_TO_CART,
    item: {
        price,
        title
    }
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newState = {
                ...state,
                items: [...state.items, action.item],
                cartTotal: (state.cartTotal + action.item.price)
            }
            return newState
        default:
            return state
    }
}