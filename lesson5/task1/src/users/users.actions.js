export const INCREMENT = 'USERS/INCREMENT';
export const DECREMENT = 'USERS/DECREMENT';

export const goNext = () => {
    return {
        type: INCREMENT,
    }
}
export const goPrev = () => {
    return {
        type: DECREMENT,
    }
}
