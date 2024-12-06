import { createStore } from 'redux';
import { userReducer } from './users.reducer.js';


export const store = createStore(userReducer);

export default store;