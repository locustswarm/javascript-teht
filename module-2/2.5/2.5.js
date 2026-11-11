'use strict';

let numero;
let numerot = [];

while (true) {
    numero = parseInt(prompt('Anna numero'));
    if (numerot.includes(numero)) {
        break
    }
    numerot.push(numero)
}

numerot.sort((a,b) => a - b)

for (let i = 0; i <= numerot.length-1; i++) {
    console.log(numerot[i])
}