// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
function sumMix(x) {
    // Convert all elements to numbers and calculate the sum
    return x.reduce((sum, value) => sum + Number(value), 0);
}



function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }