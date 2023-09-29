/**
 * *using a readline function to take input from the user and display on the screen
 */

// const readline_sync = require("readline-sync");

// const username = readline_sync.question(`may i know your name? `);
// const user_age = readline_sync.questionInt(`may i know your age too ? `);

// console.log(typeof user_age);
// console.log(`welcome to My Directory ${username} Good Morning`);
// // console.log(`thank you for letting us know your age is ${user_age}`);
// console.log(`you were born in the year ${2023 - user_age} `);

/**
 * * given 3 strings print the smallest string
 */

// const readline_sync = require("readline-sync");

// const firststr = readline_sync.question(`enter the 1st string`);
// const secondstr = readline_sync.question(`enter the 2nd string`);
// const thirdstr = readline_sync.question(`enter the 3rd string`);

// const firststrlength = firststr.length;
// const secondstrlength = secondstr.length;
// const thirdstrlength = thirdstr.length;

// if (firststrlength < secondstrlength && firststrlength < thirdstrlength) {
//   console.log(`${firststr} is smaller than both ${secondstr} and ${thirdstr}`);
// } else if (
//   secondstrlength < firststrlength &&
//   secondstrlength < thirdstrlength
// ) {
//   console.log(`${secondstr} is smaller than both ${firststr} and ${thirdstr}`);
// } else if (
//   thirdstrlength < firststrlength &&
//   thirdstrlength < secondstrlength
// ) {
//   console.log(`${thirdstr} is smaller than both ${firststr} and ${secondstr}`);
// } else {
//   console.log(`two or more strings are of the same size`);
// }
// firststrlength<secondstrlength && firststrlength<thirdstrlength? console.log(`${firststr} is smaller than both ${secondstr} ${thirdstr}`):

/**
 * * write a program to use for loop to print the numbers from min to max
 * ! using functions
 */
// function print_numbers(min, max) {
//   for (let i = min; i <= max; i++) {
//     console.log(i);
//   }
// }
// print_numbers(1, 11);

/**
 * *sum of all numers from 1 to 20
 */

// function sum_of_numbers(min, max) {
//   //   let sum = `akshat khatri`;
//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// let result = sum_of_numbers(1, 10);
// console.log(result);

/**
 * *find factorial of a number
 */
// const readline_sync = require("readline-sync");
// let usernumber = readline_sync.questionInt(
//   `enter the number you want to find factorial of`
// );

// let fact = 1;
// while (usernumber >= 1) {
//   fact = fact * usernumber;
//   usernumber--;
// }
// console.log(fact);

/**
 * *find if a string is an anagram of a string
 */

const readline_sync = require("readline-sync");
let string1 = readline_sync.question(`enter string 1`);
let string2 = readline_sync.question(`enter string 2`);

let myarray = [0];
