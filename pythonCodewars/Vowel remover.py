# Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

# Examples
# "hello"     -->  "hll"
# "codewars"  -->  "cdwrs"
# "goodbye"   -->  "gdby"
# "HELLO"     -->  "HELLO"


def shortcut(s):
    vowels = 'aeiou'
    return ''.join(char for char in s if char not in vowels)
