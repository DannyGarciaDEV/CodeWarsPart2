//Is n divisible by (...)?



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