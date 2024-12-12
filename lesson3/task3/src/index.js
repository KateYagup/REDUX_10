import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { addProduct } from './cart.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('Uk'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));


store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));

// store.dispatch(deleteUser(2));
// store.dispatch(updateUser(2, { name: 'Bob Martin', age: 17 }))