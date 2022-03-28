// Scenario 1 is using an object with 3 keys or values, which can be reassigned if we like. Then, we are declaring
// a function declareMurderer which return a string with the name of the murderer. At the end we are asking to
// return the verdict which is enclosed on a variable equal to the primary function already declare. We get 
// The murderer is Miss Scarlet.

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Scenario 2 returns an error. Very easy to spot as we are trying to reassigned a new value to a const variable

const murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Scenario 3 is scoping through all the code and it will return both verdicts correctly and with no errors

let murderer = 'Professor Plum';

const declareMurderer = function() {
let murderer = 'Mrs. Peacock';
return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Scenario 4 scopes through the first function with the let variable but we are changing the 3rd suspect after declaring it at the beginnning
// this will tell the let variable to use that new suspect and return it in the string console.log(suspects) / Then , the second consolelog returns
// the first suspect we declared at first, Mrs, Peacock. because it is not inside the function.

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
let suspectThree = 'Colonel Mustard';
return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Scenario 5 - again, reassigning a new value to the key object weapon. Succesfully returning a string with the new weapon
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Scenario 6 - in this case the first let variable is outside everything and we are not using it. For the next variables, 
// I can use either as I am asking the code to return both of them. There are no restrictions, I guess??


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    murderer = 'Mrs. White';
}

plotTwist();
}

const declareMurderer = function () {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Scenario 7 - very straight forward. this code will return the first string with the first murderer's name Mr Green.

let murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    let murderer = 'Colonel Mustard';

const unexpectedOutcome = function() {
murderer = 'Miss Scarlet';
}

unexpectedOutcome();
}

plotTwist();
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Scenario 8 - we are reasignning values all over the place.
// this variable can be changed
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

const plotTwist = function(room) {
if (scenario.room === room) {
scenario.murderer = 'Colonel Mustard';
}

const unexpectedOutcome = function(murderer) {
if (scenario.murderer === murderer) {
scenario.weapon = 'Candle Stick';
    }
}
// I do not understand why is this necessary?
unexpectedOutcome('Colonel Mustard');
}
// what is the purpose of this?
plotTwist('Dining Room');
}
// I changed this a little bit to try something and returned what I was expecting.
const declareWeapon = function() {
return `The weapon is ${scenario.weapon} and ${scenario.murderer} is the killer who committed the crime inside the ${scenario.room}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Scenario 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
let murderer = 'Mrs. Peacock'; 
// this variable is not doing anything because we are strickly assigning a value. so, the murderer will be Prof PLum

}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
