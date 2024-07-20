# Debug the functions
# Should be easy, begin by looking at the code. Debug the code and the functions should work.

# There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

def multi(l_st):
    result = 1
    for x in l_st:
        result *= x
    return result

# Addition function: Return the sum of the elements in the list
def add(l_st):
    return sum(l_st)

# Reverse function: Return the reversed version of the input string
def reverse(string):
    return string[::-1]