
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
    // Find the position of the anchor (#)
    var anchorIndex = url.indexOf('#');
  
    // If the anchor is found, remove everything after it
    if (anchorIndex !== -1) {
      return url.substring(0, anchorIndex);
    }
  
    // If no anchor is found, return the original URL
    return url;
  }
  

  // Test cases
console.log(removeUrlAnchor("www.codewars.com#about"));      // "www.codewars.com"
console.log(removeUrlAnchor("www.codewars.com?page=1"));      // "www.codewars.com?page=1".
console.log(removeUrlAnchor("www.example.com#section1"));     // "www.example.com"
console.log(removeUrlAnchor("www.example.com?query#section2"));// "www.example.com?query"..