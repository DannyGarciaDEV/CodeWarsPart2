// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
  }


  const solution = string => {
    return [...string].map((char) => {
      return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
  }

  //