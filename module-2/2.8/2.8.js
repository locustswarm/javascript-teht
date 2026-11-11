'use strict';

function concat(lista) {
    let yhdistettysana = ""
    for (let i = 0; i <= lista.length-1; i++) {
        yhdistettysana += lista[i]
    }
    return yhdistettysana
}

let lista = ["Johnny", "Deedee", "Joey", "Marky"]
const tulos = concat(lista)
document.querySelector('#tulos').innerHTML = tulos;