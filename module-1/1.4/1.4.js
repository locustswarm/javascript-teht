'use strict';

function hattu() {
    let luku = Math.floor(Math.random() * 4) + 1;
    return luku
}

const nimi = prompt('Mikä on nimesi?');
const luku = hattu()
const tulos = document.querySelector('#tulos')

if (luku === 1) {
    tulos.innerHTML = `${nimi}, you are Gryffindor.`
}
else if (luku === 2) {
    tulos.innerHTML = `${nimi}, you are Slytherin.`
}
else if (luku === 3) {
    tulos.innerHTML = `${nimi}, you are Hufflepuff.`
}
else {
    tulos.innerHTML = `${nimi}, you are Ravenclaw.`
}
