import { INCREMENT, DECREMENT } from './users.actions';
import { users } from './users';

const itemsPrePage = 3;
const initialState = {
    usersList: users.slice(0, itemsPrePage), currentPage: 0, totalPages: Math.ceil(users.length / itemsPrePage)
}

export const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                currentPage: state.currentPage + 1,
                usersList: users.slice((state.currentPage + 1) * itemsPrePage, (state.currentPage + 1) * itemsPrePage + itemsPrePage),
            };
        case DECREMENT:
            return {
                ...state,
                currentPage: state.currentPage - 1,
                usersList: users.slice((state.currentPage - 1) * itemsPrePage, (state.currentPage - 1) * itemsPrePage + itemsPrePage),
            };
        default:
            return state;
    }
};