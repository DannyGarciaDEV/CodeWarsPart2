# Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
def longest(s1, s2):
    # Step 1: Concatenate strings s1 and s2
    combined_string = s1 + s2
    
    # Step 2: Use set to remove duplicates and sort
    distinct_characters = sorted(set(combined_string))
    
    # Step 3: Join sorted characters into a string
    result = ''.join(distinct_characters)
    
    return result