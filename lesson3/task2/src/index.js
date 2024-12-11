import store from './store';
import { increment, decrement } from './counter.actions';

// store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());


