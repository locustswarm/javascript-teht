'use strict';

let summa = 0;
let kerto = 1;
let luku;
const lista = document.querySelector("#tulokset");

for (let i = 0; i <= 2; i++) {
    luku = parseInt(prompt('Anna luku: '))
    summa += luku;
    kerto *= luku;
    console.log(luku,summa,kerto)
}

lista.innerHTML += "<li>" + "Lukujen summa on: " + summa + "</li>";
lista.innerHTML += "<li>" + "Luvut kerrottu yhteen:" + kerto + "</li>";
lista.innerHTML += "<li>" + "Lukujen keskiarvo on: " + summa / 3 + "</li>";