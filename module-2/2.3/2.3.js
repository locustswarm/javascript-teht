'use strict';

'use strict';

let doglist = [];

for (let i = 1; i <= 6; i++) {
    doglist.push((prompt(`What is the name of dog number ${i}`)))
}

doglist.sort()
doglist.reverse()

for (let i = 0; i <= doglist.length-1; i++) {
    document.querySelector("#dogs").innerHTML += "<li>" + doglist[i] + "</li>";
}