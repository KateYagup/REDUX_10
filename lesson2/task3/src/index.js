//html и scss скопировать из task2 чтобы все заработало

import './index.scss';
import { addUser, deleteUser } from './users.actions.js';
import store from './store.js';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action ="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
    store.dispatch(addUser({ id: 76, name: 'Sarah' }));
    // console.log(store.getState());
}


const onDecrement = () => {
    store.dispatch(deleteUser(76));
    // alert('!!!')
}

// const onReset = () => {
//     store.dispatch(reset());
// }

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
// resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    console.log(store.getState());
})