'use strict';

function noppa(kerrat) {
    let summa = 0;
    for (let i = 0; i <= kerrat-1; i++) {
        let luku = Math.floor(Math.random() * 6) + 1;
        summa += luku;
    }
    return summa
}

const monta = parseInt(prompt('Kuinka monta nopan heittoa?'))
const tulos = noppa(monta)
document.querySelector('#tulos').innerHTML = `Noppien heittojen summa on ${tulos}`