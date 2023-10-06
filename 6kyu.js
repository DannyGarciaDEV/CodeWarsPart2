// DESCRIPTION:
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21


function solution(roman) {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < roman.length; i++) {
      const current = romanValues[roman[i]];
      const next = romanValues[roman[i + 1]];
      
      if (next && current < next) {
        result += next - current;
        i++;
      } else {
        result += current;
      }
    }
    
    return result;
  }
  
//   Multiples of 3 or 5

//   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//   Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
  
//   Note: If the number is a multiple of both 3 and 5, only count it once.
  
  

  function solution(number) {
    if (number <= 0) {
      return 0;
    }
  
    let sum = 0;
  
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }


//   Create Phone Number
//   Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//   Example
//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/
let nums = [3, 3];
let target = 6;

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }
  return null;
} 
twoSum(nums, target)

//6ku





function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      return "Invalid input. Please provide an array of 10 integers.";
    }
  
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');
  
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }

  /*
Financing Plan on Planet XY140Z-n

I need to save some money to buy a gift. I think I can do something like that:

First week (W0) I save nothing on Sunday, 1 on Monday, 2 on Tuesday... 6 on Saturday, second week (W1) 2 on Monday... 7 on Saturday and so on according to the table below where the days are numbered from 0 to 6.

Can you tell me how much I will have for my gift on Saturday evening after I have saved 12? (Your function finance(6) should return 168 which is the sum of the savings in the table).

Imagine now that we live on planet XY140Z-n where the days of the week are numbered from 0 to n (integer n > 0) and where I save from week number 0 to week number n included (in the table below n = 6).

How much money would I have at the end of my financing plan on planet XY140Z-n?

--	Su	Mo	Tu	We	Th	Fr	Sa
W6							12
W5						10	11
W4					8	9	10
W3				6	7	8	9
W2			4	5	6	7	8
W1		2	3	4	5	6	7
W0	0	1	2	3	4	5	6
#Example:

finance(5) --> 105
finance(6) --> 168
finance(7) --> 252
finance(5000) --> 62537505000
#Hint: try to avoid nested loops
*/



  const finance = (n) => n * (n + 1) * (n + 2) / 2;


//   "this" is an other problem

//   After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) you may try to solve this other one.

// The problem:
// Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

// If, for example, we've got a "NamedOne" like this :
class NamedOne {
  constructor(f, l) { this.firstName = f; this.lastName = l }
  get fullName() { return this.firstName + ' ' + this.lastName }
  set fullName(v) { if (/ /.test(v)) [this.firstName, this.lastName] = v.split(' ') }
} 

/*
Description:

80's Kids #7: She's a Small Wonder
Vicky is quite the small wonder. Most people don't even realize she's not a real girl, but a robot living amongst us. Sure, if you stick around her home for a while you might see her creator open up her back and make a few tweaks and even see her recharge in the closet instead of sleeping in a bed.

In this kata, we're going to help Vicky keep track of the words she's learning.

Write a function, learnWord(word) which is a method of the Robot object. The function should report back whether the word is now stored, or if she already knew the word.

Example:

var vicky = new Robot();
vicky.learnWord('hello') -> 'Thank you for teaching me hello'
vicky.learnWord('abc') -> 'Thank you for teaching me abc'
vicky.learnWord('hello') -> 'I already know the word hello'
vicky.learnWord('wow!') -> 'I do not understand the input'
Robot vicky = new Robot();
vicky.learnWord("hello") -> "Thank you for teaching me hello"
vicky.learnWord("abc") -> "Thank you for teaching me abc"
vicky.learnWord("hello") -> "I already know the word hello"
vicky.learnWord("wow!") -> "I do not understand the input"
Case shouldn't matter. Only alpha characters are valid. There's also a little trick here. Enjoy!
*/

function Robot() {
  this.arr =['i', 'already', 'know', 'the', 'word','thank', 'you', 'for','me','teaching','understand']
}

Robot.prototype.learnWord = function(word) {
  if (/\W|\d|\s/i.test(word)||!word) return "I do not understand the input"
  if (!this.arr.includes(word.toLowerCase())){
  this.arr.push(word.toLowerCase())
  return `Thank you for teaching me ${word}`
  }else
  return `I already know the word ${word}`
}



/*
Description:
When a function is called by itself it is bound to the global context; the this variable of the function will be bound to the global object.

When the getNameFunc function is called on the alpha object the value of the name variable outside of the object is returned: "The Window".

We do not want this, we want the value of the name property inside the alpha object to be returned.

Fix getNameFunc so the right value is returned.

For more information: Binding
*/

var name = "The Window";

var alpha = {
  name: "My Alpha",
  getNameFunc: function() {
    return function() {
      return this.name;
    }.bind(this);
  }
};


//
// Description:
// Your relative have decided to open a small Indian restaurant, and so she bought an automatic cooker. It publishes an API function
//
// function cook(
//     String dish,
//     Number nServings
//      , other params, specific to the dish - represented by strings
// ) {
//     ...
// }```
//
//  which takes an amount of servings, dish name and several other parameters which can vary per dish (yes, this is a very advanced cooking machine).
//
// The restaurant instantly became very popular, and your relative noticed that most people order some curry with additional ingredients - because she was already tired to repeatedly type the word _'curry'_  when making a request to cooker. So she decided to ask for your help.
//
// She cannot lend you her cooker, because it is in constant use - so she needs you to write a function
//
// ```javascript
//
// function curry(fun, /*args*/) {
//     ...
// }
// which takes another function fun and an arbitrary number of other arguments - and returns a function, which works like fun with the first arguments replaced by the remaining arguments of curry.
// For example
//
// function add(a, b, c) { return a+b+c; }
// var addOne = curry(add , 1);
//
// add(1, 2, 3) === addOne(2, 3);
// And one more thing - some code warrior who was having a snack at your relative's restaurant told her that there is such thing as execution context, and that the cook function might rely on it somehow - it is designed to work exclusively with cooking machine after all.
//
// So another request for curry function is that if the resulting function is invoked with context ctx the original function inside it should also be invoked with context ctx
//
// For example,
//
// var obj = {
//   a: 'foo',
//   b: function (a) { return this.a + a; }
// }
//
// obj.foobar = curry(obj.b, 'bar');
// obj.foobar() //should return foobar

function curry(fun, ...args) {
  return function(...arg2) {
    return fun.call(this, ...args, ...arg2);
  };
}


/*
Description:
After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) you may try to solve this other one.

The problem:
Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now !
Your mission:
So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

Examples:
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ?

( Hint: in this kata you'll try to define properties of an object )
*/
class NamedOne {
  constructor(f, l) { this.firstName = f; this.lastName = l }
  get fullName() { return this.firstName + ' ' + this.lastName }
  set fullName(v) { if (/ /.test(v)) [this.firstName, this.lastName] = v.split(' ') }}



  /*
Description:
The Problem
Dan, president of a Large company could use your help. He wants to implement a system that will switch all his devices into offline mode depending on his meeting schedule. When he's at a meeting and somebody texts him, he wants to send an automatic message informing that he's currently unavailable and the time when he's going to be back.

What To Do
Your task is to write a helper function checkAvailability that will take 2 arguments:

schedule, which is going to be a nested array with Dan's schedule for a given day. Inside arrays will consist of 2 elements - start and finish time of a given appointment,

currentTime - is a string with specific time in hh:mm 24-h format for which the function will check availability based on the schedule.

If no appointments are scheduled for currentTime, the function should return true. If there are no appointments for the day, the output should also be true
If Dan is in the middle of an appointment at currentTime, the function should return a string with the time he's going to be available.
Examples
checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "11:00"); should return true

checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "10:00"); should return "10:15"

If the time passed as input is equal to the end time of a meeting, function should also return true. checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "15:50"); should return true

You can expect valid input for this kata
*/
function checkAvailability(schedule, currentTime) {
  let t = currentTime.replace(/:/g,'')*1
  let a = schedule.map(v=>v.map(v=>v.replace(/:/g,'')*1))
  let arr = []
  for (let i=0;i<a.length;i++){
    let temp = []
    for (let j=a[i][0];j<a[i][1];j++){
      temp.push(j)
    }
    if (temp.includes(t)) return schedule[i][1]
    arr.push(temp)
  }
  return true
}

/*
Description:
A friend of yours is developing an application for a hotel. You should write a function that returns all names of the people on a given floor. Every floor has 6 rooms, and all rooms are numbered in a consecutive way.

The function has the following signature:

function roomMates( rooms, floor ){}
The argument rooms holds all clients in an array, where the index (starts at 0) corresponds to the room-number (starts at 1) and holds the name of the client.

floor is an integer and denotes the floor whose names need to be returned. If the floor is empty, the function roomMates should return an empty Array.

rooms = [ "foo", "bar" ]
Means that foo (index 0) stays in room #1 of the 1st floor and bar (index 1) in room #2 of the 1st floor.

Empty rooms shouldn't be returned, so he can directly count the number of occupied rooms by looking at the length of the array.

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

function roomMates(rooms, floor) {
  return rooms.slice(floor * 6 - 6, +floor * 6).filter(v => v);
}
// The worst kata

//Who likes it?


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names === null) {
    return 'no one likes this';
  } else if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]}, and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`;
  }
}

// Find the odd int
// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).




function findOdd(A) {
  // Create an empty object to store the counts of each number
  const numberCounts = {};

  // Iterate through the input array A
  for (const num of A) {
    // If the number is not in the numberCounts object, add it with a count of 1
    if (!(num in numberCounts)) {
      numberCounts[num] = 1;
    } else {
      // If the number is already in the object, increment its count
      numberCounts[num]++;
    }
  }

  // Iterate through the object to find the first number with an odd count
  for (const num in numberCounts) {
    if (numberCounts[num] % 2 !== 0) {
      return parseInt(num); // Return the number as an integer
    }
  }

  // If no number with an odd count was found, return a message or value of your choice
  return 'No number repeats an odd number of times';
}