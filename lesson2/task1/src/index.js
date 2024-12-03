import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DICREMENT = 'COUNTER/DICREMENT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DICREMENT,
    }
}

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DICREMENT:
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counterReducer);
