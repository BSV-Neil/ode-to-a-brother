'use strict';

// variables - we store data in variables
// data types - this are the different kinds of things we can put in a variable
// flow control - how we make decisions
// functions - ways to make repeatable chunks of code

// in 102: 
// variables
// half the data types
// half of flow control
// functions

// variables
var instructorName;

// 'hello world' is a string - aka a blob of text. We tell JS it's a string by putting quotes around it. 
console.log('hello world');
console.log(instructorName);

instructorName = 'Stephanie';
console.log(instructorName);

instructorName = 'Amanda';
console.log(instructorName);

var stephaniesCatsName = 'Amelia';
console.log(stephaniesCatsName);

// let's make some numbers!
var stephaniesAge = 41;
console.log(stephaniesAge);

var sum = 2 + 2;
var subtract = 3 - 1;
var multiply = 4 * 2;
var divide = 4 / 2;

var usersAge = prompt("How old are you today?");
console.log(usersAge);

if (usersAge === '36' || usersAge === '37') {
    document.write('<h2>You are ' + usersAge + ' years old today!</h2>');
} else {
    document.write('<h2>You are lying about your age. You are not the chosen one.</h2>');
}
