import { fetchCurrencies } from './fetchCurrencies.js';

const formEl = document.querySelector('.js-form');
const convertFromEl = document.querySelector('.js-convert-from');
const convertToEl = document.querySelector('.js-convert-to');
const clockEl = document.querySelector('.js-clock');

setInterval(() => {
  clockEl.innerText = `Today is ${new Date().toLocaleString()}`;
}, 1000);

const currencies = await fetchCurrencies();
Object.entries(currencies).forEach(curr => {
  convertFromEl.appendChild(createOptionEl(curr));
  convertToEl.appendChild(createOptionEl(curr));
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  createResultElement();
});

function createResultElement() {
  const resultEl = document.querySelector('.js-result');
  const amountEl = document.querySelector('.js-amount');

  resultEl.innerHTML = `${amountEl.value} <strong>${
    convertFromEl.options[convertFromEl.selectedIndex].text
  }</strong> = ${(
    (amountEl.value / convertFromEl.value) *
    convertToEl.value
  ).toFixed(2)} <strong>${
    convertToEl.options[convertToEl.selectedIndex].text
  }</strong>`;
}

function createOptionEl(curr) {
  const optionEl = document.createElement('option');
  optionEl.value = curr[1];
  optionEl.innerText = curr[0];

  return optionEl;
}
