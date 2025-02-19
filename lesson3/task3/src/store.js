import { createStore, combineReducers } from 'redux';
import usersReducer from './user.reducer';
import { languageReducer } from './language.reducer';
import { cartReducer } from './cart.reducer';

const appReducer = combineReducers({
    user: usersReducer,
    language: languageReducer,
    cart: cartReducer
})

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;