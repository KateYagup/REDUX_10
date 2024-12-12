export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'CART/REMOVE_PRODUCT';

export const addProduct = (cartData) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            cartData
        }
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            cartId
        }
    }
}