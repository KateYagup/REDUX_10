import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import usersReducer from './users.reducer';

const appReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
})

const store = createStore(appReducer);

export default store;

// import { createStore } from 'redux';

// const INCREMENT = 'COUNTER/INCREMENT';
// const DECREMENT = 'COUNTER/DECREMENT';
// const RESET = 'COUNTER/RESET';

// export const increment = () => {
//     return {
//         type: INCREMENT,
//     }
// }
// export const decrement = () => {
//     return {
//         type: DECREMENT,
//     }
// }
// export const reset = () => {
//     return {
//         type: RESET,
//     }
// }

// export const initialState = {
//     history: [],
// }

// export const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 value: state.value + 1,
//                 history: state.history.concat('+1')
//             };
//         case DECREMENT:
//             return {
//                 ...state,
//                 value: state.value - 1,
//                 history: state.history.concat(-1)
//             };
//         case RESET:
//             return {
//                 value: 0,
//                 history: [],
//             }
//         default:
//             return state;
//     }
// }

// export const store = createStore(counterReducer);

// export default store;