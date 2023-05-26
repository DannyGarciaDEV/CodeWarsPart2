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