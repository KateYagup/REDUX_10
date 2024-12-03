import './index.scss';
import store, { increment } from './store';

const resultElem = document.querySelector('.counter');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action ="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
    store.dispatch(increment());
}

incrementBtn.addEventListener('click', onIncrement);

store.subsribe(() => {
    store.getState();
    resultElem.textContent = result;
})