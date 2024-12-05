import { addUser, deleteUser, ADD, DELETE } from './users.actions.js';

export const initialState = {
    usersList: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: [...state.usersList, action.text]
            };
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(index => index.id !== action.index),
                // usersList: state.usersList.slice(0, state.usersList.length - 1),

            }
        default:
            return state;
    }
}