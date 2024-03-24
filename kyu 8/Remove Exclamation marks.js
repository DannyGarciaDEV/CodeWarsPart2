// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace('!', '')
    
    }

    function replace(s) {
        const vowels = 'aeiouAEIOU';
        let result = '';
        
        for (let i = 0; i < s.length; i++) {
          if (vowels.includes(s[i])) {
            result += '!';
          } else {
            result += s[i];
          }
        }
        
        return result;
      }