// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
    let firstCharacter = str[0];
    console.log(firstCharacter, "first");
    
    let lastCharacter = str[str.length - 1];
    console.log(lastCharacter, "last");
    
    // Return the string without the first and last characters
    return str.slice(1, str.length - 1);
  }
  