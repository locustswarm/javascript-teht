'use strict';

let alku = parseInt(prompt("Anna vuosiluku josta aloitetaan"));
let loppu = parseInt(prompt('Anna vuosiluku johon lopetetaan'));
const lista = document.querySelector("#lista");

for (let i = alku; i <= loppu; i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        lista.innerHTML += '<li>' + i + '</li>';
}
}
