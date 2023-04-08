import { fetchCurrencies } from './fetchCurrencies.js';

async function init() {
  const formEl = document.querySelector('.js-form');
  const resultEl = document.querySelector('.js-result');
  const amountEl = document.querySelector('.js-amount');
  const convertFromEl = document.querySelector('.js-convert-from');
  const convertToEl = document.querySelector('.js-convert-to');

  const currencies = await fetchCurrencies();
  Object.entries(currencies).forEach(curr => {
    convertFromEl.appendChild(createOptionEl(curr));
    convertToEl.appendChild(createOptionEl(curr));
  });

  formEl.addEventListener('submit', e => {
    e.preventDefault();

    resultEl.innerText = `${amountEl.value} ${
      convertFromEl.options[convertFromEl.selectedIndex].text
    } = ${((amountEl.value / convertFromEl.value) * convertToEl.value).toFixed(
      2
    )} ${convertToEl.options[convertToEl.selectedIndex].text}`;
  });
}

function createOptionEl(curr) {
  const optionEl = document.createElement('option');
  optionEl.value = curr[1];
  optionEl.innerText = curr[0];

  return optionEl;
}

init();
