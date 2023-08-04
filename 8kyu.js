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