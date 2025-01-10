import { createStore, applyMiddleware, compose } from 'redux';
import usersReducer, { counterReducer } from './users/users.reducer';

const reducer = combineReducers({
    users: usersReducer,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
