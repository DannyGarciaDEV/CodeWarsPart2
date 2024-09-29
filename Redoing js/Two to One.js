// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    // Combine the two strings and create a set to get distinct letters
    let combined = new Set(s1 + s2);
    
    // Convert the set back to an array, sort it alphabetically, and join it back into a string
    return [...combined].sort().join('');
  }