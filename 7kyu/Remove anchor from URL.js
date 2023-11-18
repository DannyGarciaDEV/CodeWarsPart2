
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
  