export async function fetchCurrencies() {
  try {
    const res = await fetch('https://api.exchangerate.host/latest');
    const data = await res.json();
    return data.rates;
  } catch (err) {
    return 'We could not load currencies, please try again later.';
  }
}
