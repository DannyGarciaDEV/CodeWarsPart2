# Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or   .

# You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

# Examples:

#   double_check("abca")
#   #returns False
  
#   double_check("aabc")
#   #returns True
  
#   double_check("a 11 c d")
#   #returns True
  
#   double_check("AabBcC")
#   #returns True
  
#   double_check("a b  c")
#   #returns True
  
#   double_check("a b c d e f g h i h k")
#   #returns False
  
#   double_check("2020")
#   #returns False
  
#   double_check("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
#   #returns False

def double_check(strng):
    # Convert the string to lowercase for case insensitivity
    strng = strng.lower()
    
    # Iterate through the string to check for double characters
    for i in range(len(strng) - 1):
        if strng[i] == strng[i + 1]:
            return True
    
    return False