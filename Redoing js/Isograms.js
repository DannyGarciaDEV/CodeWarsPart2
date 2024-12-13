// IsogramsAn isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true

function isIsogram(str) {
    const lowerCased = str.toLowerCase();
    const uniqueLetters = new Set(lowerCased);
    return uniqueLetters.size === lowerCased.length;
  }

  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}///