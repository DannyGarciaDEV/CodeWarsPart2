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

// Simple remove duplicates
// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

function solve(arr){
  return arr.filter((a,b) => arr.lastIndexOf(a) == b);
}



// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!
function squareDigits(num){
  let  numNew = num.toString().split("").map(num => num * num).join("")
  return Number(numNew)
}

// Julie is x years older than her brother, and she is also y times as old as him.
// Given x and y calculate Julie's age using the function age(x, y).
// For example:
// Age(6, 3) // returns 9
// Note also that x can be negative, and y can be a decimal.
// Age(-15, 0.25) // returns 5
// That is, Julie is 15 years younger and 0.25 times the age of her brother.
// Do not concern yourself with the imperfections inherent in dividing by floating point numbers, 
// as your answer will be rounded. Also, for the sake of simplicity, Julie is never the same age as her brother.


function age(x, y){
  return x/(y-1)*y
}


//Cats in Hats
// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

// The Cat In The Hat is 2,000,000 cat units tall.

// Each cat is 2.5 times bigger than the cat underneath their hat.

// Find the total height of the cats if they are standing on top of one another.

// Counting starts from the Cat In The Hat

// n = the number of cats

// fix to 3 decimal places.

function height(n) {
  return (2000000 * (1 - Math.pow(0.4, n + 1)) / (1 - 0.4)).toFixed(3);
}


/*
Description:
The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes. The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element. There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years. The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.

Since the current calendar is Gregorian, I will only be using years from the epoch 1924. For simplicity I am counting the year as a whole year and not from January/February to the end of the year.

##Task

Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".

animals (or $animals in Ruby) is a preloaded array containing the animals in order:

['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

elements (or $elements in Ruby) is a preloaded array containing the elements in order:

['Wood', 'Fire', 'Earth', 'Metal', 'Water']

Tell me your zodiac sign and element in the comments. Happy coding :)
*/
function chineseZodiac(year){
  const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const baseYear = 1924;
  const givenYear = year - baseYear;
  const element = elements[(Math.floor(givenYear/2)%5)];
  const animal = animals[givenYear % 12];
  return element + " " + animal;

}


// Multiples!
// Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3.
//  "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss"
//   if it isn't divisible by any of them. Note: Your program should only return one value

// Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"!

function multiple(x) {
  if (x % 3 === 0 && x % 5 === 0) {
   return "BangBoom";
 } else if (x % 3 === 0) {
   return "Bang";
 } else if (x % 5 === 0) {
   return "Boom";
 } else {
   return "Miss";
 }

} 

//Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a,b){
  let count = 0;
  if (a == b) return a;
  if(a < b){
    for (; a <= b; a++){
      count += a;
    }
  } else if (a > b){
      for(; b <= a; b++){
        count += b;
      }
  }
  return count
}

// Reverse words
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
  function reverseWords(str) {
return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }


// 254 shades of grey
// Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

// Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

// Examples:

// n =  1:    ["#010101"]
// n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
// As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

// Black: #000000 and white: #ffffff are not accepted values.

// When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

// Have fun!.

function shadesOfGrey(n) {
  var shades = []
  
  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2)
    shades.push('#' + grey + grey + grey)
  }
  
  return shades
}

/*
Retirement home viewing is on a knife edge - it really has been a bad day on Countdown…!! (https://en.wikipedia.org/wiki/Countdown_(game_show))

Nick Hewer has lost his glasses and someone is playing tricks on Rachel Riley.

Rachel finds her vowels (A, E, I, O and U), consonants and numbers have all been muddled up into different piles (2D arrays of both strings and numbers) and some joker has thrown in some lower case letters to make matters worse.

As the show assistant, your challenge is to help Rachel sort her vowels into one pile (array), and her consonants into another pile (array).

In doing so you will need to change any lower-case letters to upper-case (as they only use upper case letters on the show…) and you will need to remove any numbers as Rachel has enough already. You do not need to return the numbers in a separate array - just remove them.

You should end up with two neat piles like below:

EG: if there were the following cards in the pile (2D array): [["a","B","H"], [0,"d","s"], [1,"W","J"]]

you would need to return: [["A"], ["B","H","D","S","W","J"]]

Consisting of: Vowels: ["A"] Consonants: ["B","H","D","S","W","J"]

Good luck!!
*/
function sortLetters(a) {
  let arr=[].concat(...a).filter(v=>typeof v === 'string').join`/`.toUpperCase().split`/`
  return [arr.filter(v=>/[AEUIO]/.test(v)),arr.filter(v=>/[^AEUIO]/.test(v))]
}

// Leap Years

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

//fixing 


// Power of 4
// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

// (In C# Integer means all integer Types like Int16,Int32,.....)

// Examples
// powerOf4(1024) // returns true
// powerOf4(44) // returns false
// powerOf4("not a positive integer") //
function powerOf4(n) {
  if (typeof n === 'number' && Number.isInteger(n)) {
    // Check if the number is a positive power of 4
    return n > 0 && (n & (n - 1)) === 0 && (n - 1) % 3 === 0;
  } else {
    return false;
  }
}

// Aerial Firefighting
// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

// The given string is a 2D plane of random length consisting of two characters:

// x representing fire
// Y representing buildings.
// Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

// Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

// Note: all inputs will be valid.



function waterbombs(fire, w) {
  return fire.split("Y").reduce((a, b) => a + Math.ceil(b.length / w), 0)
}


// Waiting room

// There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

// For some reason people choose a chair in the following way

// Find a place as far from other people as possible
// Find a place as close to exit as possible
// All chairs must be occupied before the first person will be served

// So it looks like this for 10 chairs and 10 patients

function lastChair(n) {
  return n - 1;
}

// Vampire Numbers
// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product

var vampire_test = function(a, b){
  return (''+a+b).split('').sort().join() == (a*b+'').split('').sort().join();
}


// Are there doubles?
// Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

// Examples:

//   doubleCheck("abca")
//   //returns false
  
//   doubleCheck("aabc")
//   //returns true
  
//   doubleCheck("a 11 c d")
//   //returns true
  
//   doubleCheck("AabBcC")
//   //returns true
  
//   doubleCheck("a b  c")
//   //returns true
  
//   doubleCheck("a b c d e f g h i h k")
//   //returns false
  
//   doubleCheck("2020")
//   //returns false
  
//   doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
//   //returns false
const doubleCheck = (str) => /(.)\1/i.test(str);

//Basi Method
/*
Description:
Implement this

[2,5,1,3].max() // returns 5
[1,2,3,8,4,9,7,42,99].max() // returns 99
[2,'5',1,3].max() // returns 5
[2,5,1,'ab'].max() // returns NaN
Array will contain at least one item.
*/
Array.prototype.max = function() {
  return Math.max(...this);
};

// 7 kyu
// Batman Quotes
// 62884% of 334677 of 2,350afarcilla
// JavaScript
// TRAIN AGAINNEXT KATA
// Details
// Solutions
// Discourse (46)
// Translations
// Fork|Collect|
// DESCRIPTION:
// Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

// Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

// Return the quote along with the character who said it:

// getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n") 
//   // =>  "Robin: Holy haberdashery, Batman!
// Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".


function getQuote(quotes, hero) {
  return (
    { R: "Robin", J: "Joker", B: "Batman" }[hero[0]] +
    ": " +
    quotes[hero.match(/\d+/)[0]]
  );
}
//nice
//Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }

  return count;
}


/*
Description:
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
*/
function unusualFive() {
  return ['a','a','a','a','a'].length
}


/*
Description:
Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.

Task
Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

center(strng, width, fill=' ')
If the left and right padding cannot be of equal length make the padding on the left side one character longer.

If strng is longer than width return strng unchanged.

Examples
center('a', 3)  # returns " a "
center('abc', 10, '_')  # returns "____abc___"
center('abcdefg', 2)  # returns "abcdefg"

*/

function center (str, width, fill = ' ') {
  let j = 0;
  for(let i = str.length;i<width;i++,j++){
    if(j%2==0){
      str = fill+str
    } else {
      str = str+fill
    }
  }
  return str
}


/*
Description:
How sexy is your name? Write a program that calculates how sexy one's name is according to the criteria below.

There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

    SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
              'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
              'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
              'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}
The program must return how sexy one's name is according to the "Sexy score ranking" chart.

       score <= 60:   'NOT TOO SEXY'
 61 <= score <= 300:  'PRETTY SEXY'
301 <= score <= 599:  'VERY SEXY'
       score >= 600:  'THE ULTIMATE SEXIEST'
*/

function sexyName(name) {
  let score = 0;
  name.toUpperCase().split``.map(v=>SCORES[v]?score+=SCORES[v]:null);
  if (score<=60) return 'NOT TOO SEXY'
  if (score<=300) return 'PRETTY SEXY'
  if (score<=599) return 'VERY SEXY'
  return 'THE ULTIMATE SEXIEST'
}



// Task
// How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

// Example
// For A = "abc" and B = "abccba", the output should be 2.

// We can construct 2 strings A with letters from B.

// Input/Output
// [input] string A

// String to construct, A contains only lowercase English letters.

// Constraints: 3 ≤ A.length ≤ 9.

// [input] string B

// String containing needed letters, B contains only lowercase English letters.

// Constraints: 3 ≤ B.length ≤ 50.

// [output] an integer

function stringsConstruction(str, target) {
  for(let i = 0;; i++) {
    for (let c of str) {
      if (target.includes(c)) target = target.replace(c, '-')
      else return i;
    }
  }
}


/*
Description:
Create a resolved javascript Promise that will return 'Hello World!'.
*/
async function promiseHelloWorld() {
  return await "Hello World!";
}


/*
Description:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}