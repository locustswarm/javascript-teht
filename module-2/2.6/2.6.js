'use strict';

function heita_noppaa() {
    let luku = Math.floor(Math.random() * 6) + 1;
    return  luku
}

let heitto;
do {
    heitto = heita_noppaa()
    document.querySelector('#lista').innerHTML += '<li>' + heitto + '</li>';
}
while (heitto < 6) {

}
