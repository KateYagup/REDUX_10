import store from './store';
import { increment, decrement, reset } from './counter';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());


store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));

store.dispatch(deleteUser(2));
store.dispatch(updateUser(2, { name: 'Bob Martin', age: 17 }))

// import './index.scss';
// import store, { increment, decrement, reset } from './store';

// const resultElem = document.querySelector('.counter__result');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const resetBtn = document.querySelector('[data-action ="reset"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// const onIncrement = () => {
//     store.dispatch(increment());
// }

// const onDecrement = () => {
//     store.dispatch(decrement());
// }

// const onReset = () => {
//     store.dispatch(reset());
// }
// incrementBtn.addEventListener('click', onIncrement);
// decrementBtn.addEventListener('click', onDecrement);
// resetBtn.addEventListener('click', onReset);

// store.subscribe(() => {
//     const state = store.getState();
//     const currentValue = state.history.reduce((acc, value) => acc + Number(value), 0);
//     console.log(typeof state.history);
//     console.log(state.history);
//     const historyString = state.history.join('');
//     // const historyString = state.history;
//     // resultElem.textContent = `${historyString} = ${currentValue}`;
//     // const historyString = state.history[state.history.length - 1] === 1
//     //     ? state.history.join(' +')
//     //     : state.history.join(' ');

//     resultElem.textContent = state.history.length === 0
//         ? ''
//         : `${historyString} = ${currentValue}`;
//     // console.log(store.getState());
// })