'use strict';

let participants = [];
let howmany = parseInt(prompt('How many participants?'));

for (let i = 1; i <= howmany; i++) {
    participants.push((prompt(`What is the name of participant number ${i}`)))
}

participants.sort()

for (let i = 0; i <= participants.length-1; i++) {
    document.querySelector("#participants").innerHTML += "<li>" + participants[i] + "</li>";
}