import { fetchCurrencies } from './fetchCurrencies.js';

async function init() {
  const currencyEls = document.querySelectorAll('.js-currency');

  const currencies = await fetchCurrencies();
  Object.entries(currencies).forEach(curr =>
    currencyEls.forEach(el => el.appendChild(createOptionEl(curr)))
  );
}

function createOptionEl(curr) {
  const optionEl = document.createElement('option');
  optionEl.value = curr[1];
  optionEl.innerText = curr[0];

  return optionEl;
}

init();
