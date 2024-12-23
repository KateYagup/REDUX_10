import { INCREMENT, DECREMENT } from './users.actions';
import { users } from './users';

const initialState = {
    users:
        { usersList: users, currentPage: 0 }
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                currentPage: state.users.currentPage + 1,
                // usersList: state.users.usersList
            };
        case DECREMENT:
            return {
                ...state,
                currentPage: state.users.currentPage - 1,
                // usersList: state.users.usersList
            };
        default:
            return state;
    }
};