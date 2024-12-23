export const INCREMENT = 'USERS/INCREMENT';
export const DECREMENT = 'USERS/DECREMENT';

export const increment = () => {
    return {
        type: INCREMENT,
    }
}
export const decrement = () => {
    return {
        type: DECREMENT,
    }
}
