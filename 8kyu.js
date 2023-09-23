// Basic variable assignment
// This code should store "codewa.rs" as a variable called
//  name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;




// Keep Hydrated!
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5
function litres(time) {
    let calculateLitres = Math.floor(time * 0.5);
    return calculateLitres;
  }

//   Quarter of the year
//   Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

  const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);
  }

// Sum of Multiples
//   Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
  function sumMul(n,m){
    let r = 0;
    for(let i = 1; i*n<m; i++){
      r+=i*n
    }
    return r > 0 ? r : 'INVALID'
  }
  
  // Stringy Strings
  // write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

  // the string should start with a 1.
  
  // a string with size 6 should return :'101010'.
  
  // with size 4 should return : '1010'.
  
  // with size 12 should return : '101010101010'.
  
  // The size will always be positive and will only use whole numbers.
  
  
  function stringy(size) {
    var str = '';
    
    for (var i = 1; i <= size; i++) {
    // loop by starting with 1 until you get to size number
      str = str + i%2  
    // if 1 is less than or equal to size, string = str + 1 % 2, which is 1  
    // if 2 is less than or equal to size, string = str + 1 % 2, which is 0  
    }
    return str;
  }
// Removing elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that
  function removeEveryOther(arr) {
    return arr.filter(function(i, index) {
      return index % 2 === 0;
    });
  }
  
  // Short Long Short
  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

  // Hint for R users:
  
  // The length of string is not always the same as the number of characters
  // For example: (Input1, Input2) --> output
  
  // ("1", "22") --> "1221"
  // ("22", "1") --> "1221"

  function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
  }
  
  // Add Length
  // DESCRIPTION:
  // What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
  
  // Example(Input --> Output)
  
  // "apple ban" --> ["apple 5", "ban 3"]
  // "you will win" -->["you 3", "will 4", "win 3"]
  // Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
  
  // Note: String will have at least one element; words will always be separated by a space
  function addLength(inputString) {
    const words = inputString.split(' ');
    const result = [];

    for (const word of words) {
        result.push(`${word} ${word.length}`);
    }

    return result;
}

/*
We are living in communism and everyone has got christmas tree(same kind) from goverment!

Task:
-Decorate christmas tree!
Restrictions:
-You can only edit existing characters(spaces).
-You cant edit initial dots!they cant even change position.
-Dont use characters such as "" , "`" or "."
-Zoom out to see whole christmas tree in console (press ctrl and "-")

Lets choose best christmas tree this year!
*/
function decorateTree() {
  var tree = `
                                                                                              
                                                                                                        
                                                                                                      
                                   .                                                                   
                                .    .                                                                   
                              .   * *  .                                                                 
                            .            .                                                              
                          .                .                                                             
                        ......................                                                          
                          .               .                                                             
                        .                   .                                                           
                      .       * * * * *       .                                                         
                    .                           .                                                       
                  .                               .                                                     
                .....................................                                                   
                  .                               .                                                     
                .                                   .                                                   
              .                                       .                                                 
            .           *  *  *  +*  *+  *  *  *  *       .                                               
          .                     uwu                          .                                             
        .                                                   .                                           
      .........................................................                                         
                               ......                                                                   
                               ......                                                                   
                               ......                                                                   
                                                                                                     
            `;

  console.log(tree);
  return tree;
}


/*
Description:
You task to pass only this tests :

a == false
!a == false
a == !a
*/

const a = '0';



// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.
function squareSum(numbers){
  let total = 0
    for(let i = 0; i < numbers.length; i++){
      total += numbers[i] ** 2
    }
    return total
  }