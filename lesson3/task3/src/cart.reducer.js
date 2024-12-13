import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions"

const initialState = {
    products: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload.cartData)
            }
        case REMOVE_PRODUCT:
            const newList = products
                .filter(cart => cart.id !== state.products.cartData);
            return {
                ...state,
                products: newList
            }
        default:
            return state;
    }

}