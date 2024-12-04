import { createStore } from 'redux';

// const INCREMENT = 'COUNTER/INCREMENT';
// const DECREMENT = 'COUNTER/DECREMENT';
// const RESET = 'COUNTER/RESET';

const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';


export const addUser = () => {
    return {
        type: ADD,
    }
}

export const deleteUser = () => {
    return {
        type: DELETE,
    }
}

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

export const initialState = {
    usersList: [],
}

export const userReducer = (state = usersList, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: [...state.usersList, 1]
            };
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.slice(-1),
            }
        default:
            return state;
    }
}

// export const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 value: state.value + 1,
//                 history: state.history.concat(1)
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
export const store = createStore(userReducer);

export default store;