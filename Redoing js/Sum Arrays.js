// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum(numbers) {
    // Initialize a variable to store the total sum
    let total = 0;
    
    // Loop through each number in the array and add it to total
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    
    // Return the final total
    return total;
  }
  