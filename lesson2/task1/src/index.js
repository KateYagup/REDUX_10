import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DICREMENT = 'COUNTER/DICREMENT';

const increment = () => {
    return {
        type: INCREMENT
    }
}
const decrement = () => {
    return {
        type: DICREMENT,
    }
}

const counterReducer = (state = 0, action) => {
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
