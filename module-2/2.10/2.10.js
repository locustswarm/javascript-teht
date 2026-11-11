'use strict';

const numberOfCandidates = parseInt(prompt('How many candidates?'))
let candidates = [];

for (let i = 1; i <= numberOfCandidates; i++) {
    candidates.push(
        {
            name: prompt(`Name of candidate ${i}`),
            votes: 0
        }
    )
}

const numberOfVoters = parseInt(prompt("How many voters?"))
let nameOfCandidate;
let whichCandidate;

for (let i = 1; i <= numberOfVoters; i++) {
    nameOfCandidate = prompt(`Who do you wanna vote for? Voter ${i}`);
    whichCandidate = candidates.find(candidate => candidate.name === nameOfCandidate);

    if (whichCandidate) {
        whichCandidate.votes += 1
    }
}

candidates.sort((a, b) => {
   return b.votes - a.votes;
});

console.log(
    `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.\nresults:`
)
for (let i = 0; i <= candidates.length-1; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`)
}