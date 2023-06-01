//Sum of a sequence
//The sequence is defined by 3 non-negative values: begin, end, step.
//If begin value is greater than the end, your function should return 0.
// If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
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



//ES6 string addition
//It is easy to join two strings together like this string1 + string2.
function joinStrings(string1, string2){
  return `${string1} ${string2}`;
}

//reverse a number in any base 
function reverseNumber(num, base) {
  let output = 0n;
  if (base === 1n) {
    return num;
  } else {
    while (num > 0n) {
    output = output * base + num % base;
    num = num / base;
    }
  }
  return output;
}


//vowel counter 

function getCount(str) {
  let vowelsCount = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for(let char of str) {
      if(vowels.includes(char)) {
          vowelsCount++
      }
  }

  return vowelsCount;
}

//highest and lowest 
function highAndLow(numbers){
  numbers = numbers.split(" ");
  return Math.max(...numbers) +" "+ Math.min(...numbers);
}


//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
// Fizzbuzz
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]
function fizzbuzz(n){

  let arr = []
  
    for( var i=1; i<=n; i++){
      if(i % 15 == 0){
        arr.push('FizzBuzz')
      }else if(i % 3 == 0){
        arr.push('Fizz')
      }else if(i % 5 == 0){
        arr.push('Buzz')
      }else{
        arr.push(i)
      }
    }
  
    return arr
  
  }


//you're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}


//Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}