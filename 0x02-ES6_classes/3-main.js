import Currency from './3-currency.js';

const dollar = new Currency('$', 'Dollars');
console.log(dollar);
console.log(dollar.displayFullCurrency());
console.log(typeof dollar instanceof Currency);
console.log(typeof dollar);
