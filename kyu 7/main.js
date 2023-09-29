//april20
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
//nput: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  //april24 
//The code provided is supposed return a person's Full Name given their first and last names.
//But it's not working properly.
//The first and/or last names are never null, but may be empty.
//Task
//Fix the bug so we can all go home early.
class Dinglemouse{

  constructor( firstName, lastName ){
    this._firstName=firstName;
    this._lastName=lastName;
  }
  
  getFullName(){
    return `${this._firstName} ${this._lastName}`.trim();
  }
  
}

//april 26 
//Remove all exclamation marks from sentence but ensure a exclamation mark at the end
 //of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//  remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"


//   // Join all the substrings in the array back into a single string.
//   split('!')

//   // Append an exclamation mark to the end of the array `sArray`.
// push('!')

//   // Join all the substrings in the array back into a single string.
//   join('')
function remove(s){
  return  s.split('!').join('').filter('Hi!');
}


//april 27
let greet = function(name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};
  // Get the first letter of the input `name`, convert it to uppercase, and append it to the string "Hello ".
 

  // Get the rest of the input `name` starting from the second letter, convert it to lowercase, and append it to the `greeting`.
 

  // Append an exclamation mark to the end of the `greeting`.


  // Return the resulting greeting string.
//may2
//Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists 
// many boat related items. If any of these items 
// are "Fire" you must spring into action. Change any instance 
// of "Fire" into "~~". Then return the string.
function fireFight(s){
  return s.split("Fire").join('~~')
}

// may 3
//
//In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins. For example:
function makeMove(sticks) {
  if (sticks === 21){
    return 1;
  } else {
    return sticks % 4;
  } 
  
}

//may 4 be with you 
// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}



//answer 
function multi(arr) {
  return arr.reduce((a, b) => a * b)
}
function add(arr) {
  return arr.reduce((a, b) => a + b)
}
function reverse(str) {
  return str.split('').reverse().join('')
}


//may 5 
// diff represents the difference between finish and start,
//  and floor is a function that rounds down to the nearest integer. The expression floor(difff / 3)
//   computes the number of times the cat can jump three shelves, and the expression def % 3 computes the
//  number of remaining jumps that the cat can make, either one or two shelves at a time.
//hello:D
function solution(start, finish){
  const diff =  finish - start 
  return  Math.floor(diff / 3) + diff % 3
}

//may 8
// in this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){
  // first filter the array to only get the items occuring once, aka filter for items where indexOf values = lastIndexOf value
   return arr
   .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
  //  then reduce to get the sum of the two numbers
   .reduce((a, b) => a + b);
};


//may9
// The following code is not giving the expected results. Can you debug what the issue is?

// The following is an example of data that would be passed in to the function.

// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

// function getNames(data){
//   return data.map(function(item){item.name});
// }

function getNames(data){
  return data.map(function(item){return item.name});


}


//may 10 i did push
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how
//    many years he will be twice as old). The answer is always greater or equal to 0
//    , no matter if it was in the past or it is in the future.
//math absolute value
function twiceAsOld(a, b) {
  return Math.abs( a - b * 2)

}

//may 11

function check(a, x) {
  for(let i = 0; i <= a.length; i++){
    if( a[i] === x){
      return true
    }  
  } 
  return false
}

///Two to One
function longest(s1, s2) {
  const combined = s1 + s2;  // Combine the two strings
  const sortedString = Array.from(new Set(combined)).sort().join('');  // Sort the combined string and remove duplicates
  return sortedString;
}

// Example usage:
const string1 = "xyaabbbccccdefww";
const string2 = "xxxxyyyyabklmopq";
const result = longest(string1, string2);
console.log(result);

// sum of a sequence
// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0.
//  If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

function sequenceSum(begin, end, step) {
  let sum = 0
  for (let i = begin; i <= end; i += step) {
    sum += i
  }
  return sum
}