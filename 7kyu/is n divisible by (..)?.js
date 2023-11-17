// //Is n divisible by (...)?

// DESCRIPTION:
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7
// This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y



function isDivisible(n, ...divisors) {
    // If there are no divisors, return true
    if (divisors.length === 0) {
      return true;
    }
  
    // Check if n is divisible by all divisors
    for (let i = 0; i < divisors.length; i++) {
      if (n % divisors[i] !== 0) {
        return false; // If not divisible by any divisor, return false
      }
    }
  
    // If divisible by all divisors, return true
    return true;
  }