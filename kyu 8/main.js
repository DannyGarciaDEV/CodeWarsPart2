//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//monday march 13 2023 hi
function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  else {
    const sum = numbers.reduce((total, num) => total + num);
    return sum / numbers.length;
  }
}






   //create a function to make a number return to the negative number
//wednesday 15 2023
   function opposite(number) {
    return -1 * number
   
  }



// multiply a function
//make the function return to call the multiplicstion everytime we call it
// friday 17 march

function multiply(a, b){


  return a * b 
    }


   // monday 20 march

   function evenOrOdd(number) {
    if(number%2 ===0) {
      return "Even";
    } else {
      return "Odd";
      
       }
    
  }


// monday 20 march 2023 
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  return x.reduce((a, b)=> a * b, 1);
  }

// tuesday 21 march 2023
// debugging 

var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}


//wednesday 22 march 2023
//Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(n => n * 2);
}

//thursday 23 march 2023
//dot notation
//n javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//You can define the object attributes during initialization, like this:


function animal(obj){

 return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}




  // monday march 27 2023
  //Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'
  function solution(str){
    return str.split('').reverse().join(''); 
  }

//tuesday march 28 2023
//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
  return str.slice(1, -1);
  
  };

  //Wed March 29 2023
  // makeuppercase
  //make a function with call makeuppercase
  // return that function into a method using dot notation

  function makeUpperCase(str) {
    return str.toUpperCase()
    }

  
  // Thu Mar 30 
  //Write a function that removes the spaces from the string, then return the resultant string.
  //Using split() and join() Method.
function noSpace(x){
return x.split(" ").join("")
}

//Friday 31  March 2023
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.
function check(a,x){
  return a.includes(x);
};

//saturday 1 march 2023
//Implement a function which convert the given boolean value into its string representation.
//create a method that makes a bolean to a string
function booleanToString(b){
 return b.toString();
  }


  // monday april 3 2023 
  /*Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. 
All inputs are positive, non-zero digits.
Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 */

  function isDivisible(n, x, y) {
  return !(n%x||n%y)
}

//tuesday april 4 2023
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// if statesments so every boleans returns to a string 
// if bolean is true retur to yes

function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

//wed april 5 2023
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
function findShort(s){
return Math.min(...s.split(" ").map (s => s.length));
}
// return a math.min methon targeting the string and slip method to calculapte the lenght of the strings
// april 6 2023
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}


///fri april 7 2023
//Write a function to split a string and convert it into an array of words.
function stringToArray(string){

return string.split(" ")

}

//mon april 10 2023
//We need a function that can transform a string into a number. What ways of achieving this do you know?
// example "1234" --> 1234
//"605"  --> 605
//"1405" --> 1405
//"-7" --> -7
//use a use a method to convert a string into a number 
//parseInt()
//return the method with fuction 

const stringToNumber = function(str){
 
  return parseInt(str);
}

//Make a function that will return a greeting statement
// that uses an input; your program should return, "Hello, <name> how are you doing today?"

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

//april 12
//Messi goals function
//Messi is a soccer player with goals in three leagues:
//Complete the function to return his total number of goals in all three leagues.
//5, 10, 2  -->  17
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let total = (laLigaGoals + copaDelReyGoals + championsLeagueGoals)
  return total
}

//april 13 
//Grasshopper - Debug sayHello
//The starship Enterprise has run into some problem when creating a program to greet 
//everyone as they come aboard. It is your job to fix the code and get the program working again!
function sayHello(name) {
  return `Hello, ${name}`
 
}
//april 14 
//his kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}

//april 17 2023
//Jenny has written a function that returns a 
//greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
//answer 
function greet(name){
  if(name === "Johnny"){
  return "Hello, my love!";
  } else {
  return "Hello, " + name + "!";
 
  }  
}

//april 18 
//You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
//six_toast(5) == 1
//And in case of 12 you need 6 toasts less (but not -6):
//six_toast(12) == 6
//The Math.abs() static method returns the absolute value of a number.
function sixToast(num) {
  return Math.abs(num -  6)
 }


 //april 19
 //Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:




 function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

//april 21 2023 
//This would convert a positive number to negative and ensure that an already negative number remains unchanged. For example, you can use this in the following way:
//in this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?




function makeNegative(num) {

return -Math.abs(num)
}


 //april 25 
 //This function should return an object, but it's not doing what's intended. What's wrong?


 function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}

//answer
 function mystery() {
  let results =
    {sanity: 'Hello'};
  return results;
}

//28 april
// First, the function multiplies the input value "mpg" by 1.609344 to convert miles to kilometers. This converts the units from mpg to kilometers per gallon (km/gallon).
// Next, it divides the result of step 1 by 4.54609188 to convert gallons to liters. This converts the units from km/gallon to km/liter.
// Finally, the function rounds the result of step 2 to 2 decimal places using the Math.round() function and returns the value.
function converter (mpg) {
  return Math.round(((mpg * 1.609344) / 4.54609188) * 100) / 100;
}

//may 1 
// function Counter() {
//   this.value = 0;
// }

// Counter.prototype.increase() {
//   this.value++;
// };

// Counter.prototype.getValue() {
//   return this.value;
// };

// Counter.prototype.reset() {
//   this.value = 0;
// };

//Our counter prototype is broken. Can you spot, what's wrong here?
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};


//may 15
///String repeat
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n time

function repeatStr (n, s) {
  return s.repeat(n);
}


//dog years to cat years
  const humanYearsCatYearsDogYears = humanYears => {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1) {
      dogYears = 15;
      catYears = 15;
    } else if (humanYears === 2) {  
      catYears = 24;
      dogYears = 24;
    } else {
      catYears = 4 * (humanYears - 2) + 24;
      dogYears = 5 * (humanYears - 2) + 24;
    }
    return [humanYears, catYears, dogYears];
  }

  