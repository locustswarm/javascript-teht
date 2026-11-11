'use strict';

function isPrime (luku) {
    let lista = [];

    for (let i = 1; i <= luku; i++){
        for (let j = 1; j <= luku; j++) {
            if (luku / j == i) {
                lista.push(i)
                console.log(lista)
            }
        }
    }
    return lista
}

const luku = parseInt(prompt('Anna numero'));
const lista = isPrime(luku);
let tulos = document.querySelector('#tulos');

if (lista.length === 2 && lista.includes(1) && lista.includes(luku)) {
    tulos.innerHTML = `${luku} is a prime number`;
}
else {
    tulos.innerHTML = `${luku} is not a prime number`;
}