'use strict';

function simulaatio(nopat, summa) {
    let noppa;
    let yht = 0;
    let kerrat = 0;
    let heitot = 0;

    for (let i = 1; i <= 10000; i++) {

        for (let i = 1; i <= nopat; i++) {
            noppa = Math.floor(Math.random() * 6) + 1;
            heitot += noppa;
        }
        if (heitot === summa) {
            yht++
        }
        heitot = 0;
        kerrat++
    }
    const todennakoisyys = (yht/kerrat)*100;
    return Number.parseFloat(todennakoisyys).toFixed(2)
}

// testaus tulokset
console.log(simulaatio(2, 7))
console.log(simulaatio(3, 15))

const nopat = parseInt(prompt('Kuinka monta noppaa?'))
const summa = parseInt(prompt('Mikä summa?'))

const tulos = simulaatio(nopat,summa)

document.querySelector('#tulos').innerHTML = `Probability to get sum ${summa} with ${nopat} dice is ${tulos}%`