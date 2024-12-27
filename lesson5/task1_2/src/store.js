import { createStore, combineReducers } from 'redux';
import { counterReducer } from './users/users.reducer';
import { useReducer } from 'react';


const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
