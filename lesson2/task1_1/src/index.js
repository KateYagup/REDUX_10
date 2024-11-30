import { createStore } from 'redux';

const incrementAction = {
    type: 'INCREMENT',
}
const decrementAction = {
    type: 'DICREMENT',
}

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DICREMENT':
            return state - 1;
        default:
            return state;
    }
}

const state = createStore(counterReducer);
console.log('store');
console.log(store.getState());