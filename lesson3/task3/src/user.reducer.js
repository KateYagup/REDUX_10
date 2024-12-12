import { SET_USER, REMOVE_USER } from './user.actions';

// const initialState = {
//     user: null
// }

const usersReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER: {
            return action.payload.userData;
        }
        case REMOVE_USER: {
            return null;
        }
        default:
            return state;
    }
}

export default usersReducer;