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
        case REMOVE_PRODUCT: {
            const newList = state.products
                .filter(cart => cart.id !== action.payload.cartId);
            return {
                ...state,
                products: newList
            }
        }
        default:
            return state;
    }

}