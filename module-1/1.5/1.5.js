'use strict';

const vluku = prompt("kijoita vuosi");

let tulos;

if (vluku % 4 === 0 && vluku % 100 !== 0 || vluku % 400 === 0) {
    tulos = 'Kirjoittamanne vuosiluku ' + vluku + ' on karkausvuosi';
}
else {
    tulos = 'Kirjoittamanne vuosiluku ' + vluku + ' ei ole karkausvuosi';
}

document.querySelector('#karkausvuosi').innerHTML = tulos;