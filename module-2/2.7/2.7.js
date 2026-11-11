'use strict';

function heita_noppaa(max) {
    let luku = Math.floor(Math.random() * max) + 1;
    return  luku
}

let heitto;
const kulmat = parseInt((prompt('Kuinka monta kulmaa nopassasi on?')))

do {
    heitto = heita_noppaa(kulmat)
    document.querySelector('#lista').innerHTML += '<li>' + heitto + '</li>';
}
while (heitto < kulmat) {

}
