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