'use strict';

let numero;
let numerot = [];

while (true) {
    numero = parseInt(prompt('Anna numero'));
    if (numero === 0) {
        break
    }
    numerot.push(numero)
}

numerot.sort((a,b) => b - a)

for (let i = 0; i <= numerot.length-1; i++) {
    console.log(numerot[i])
}