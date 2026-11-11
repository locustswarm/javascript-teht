'use strict';

const varmistus = confirm('Should i calculate the square root?');
let luku;
let nelio;
let tulos = document.querySelector('#nelio');

if (varmistus) {
    luku = parseInt(prompt('What number should i calculate?'));
    nelio = Math.sqrt(luku);
    tulos.innerHTML = `The square root of ${luku} is: ${nelio}`;
}
else {
    tulos.innerHTML = 'The square root is not calculated.';
}