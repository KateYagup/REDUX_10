import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DICREMENT = 'COUNTER/DICREMENT';

const incrementActionCreator = () => {
    return {
        type: INCREMENT
    }
}
const decrementActionCreator = () => {
    return {
        type: DICREMENT,
    }
}

const counterReducer = (state = 15, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DICREMENT:
            return state - 1;
        default:
            return state;
    }
}

console.log('store');
const store = createStore(counterReducer);
console.log(store);
store.dispatch(incrementActionCreator());
store.dispatch(incrementActionCreator());
store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator());
alert(store.getState());