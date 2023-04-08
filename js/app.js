import { fetchCurrencies } from './fetchCurrencies.js';

async function init() {
  const convertFromEl = document.querySelector('.js-convert-form');
  const convertToEl = document.querySelector('.js-convert-to');

  const currencies = await fetchCurrencies();
  Object.entries(currencies).forEach(curr => {
    convertFromEl.appendChild(createOptionEl(curr));
    convertToEl.appendChild(createOptionEl(curr));
  });
}

function createOptionEl(curr) {
  const optionEl = document.createElement('option');
  optionEl.value = curr[1];
  optionEl.innerText = curr[0];

  return optionEl;
}

init();
