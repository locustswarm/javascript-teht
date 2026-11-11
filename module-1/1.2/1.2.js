'use strict';

const user = prompt('Hey! What is your name?')

document.querySelector('#greet').innerHTML = `Hello, ${user}!`