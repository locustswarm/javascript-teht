'use strict';

function even(lista) {
    let lista2 = []
    for (let i = 0; i <= lista.length; i++) {
        if (lista[i] % 2 === 0) {
            lista2.push(lista[i])
        }
    }
    return lista2
}

const lista = [1,2,3,4,5]
const lista2 = even(lista)

console.log(lista)
console.log(lista2)