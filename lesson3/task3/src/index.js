import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct } from './cart.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

// store.dispatch(setLanguage('Uk'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 7, name: 'redis' }));
// store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeProduct(76));
