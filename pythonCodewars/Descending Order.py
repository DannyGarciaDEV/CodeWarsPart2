# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 987654321

def descending_order(num):
    # Convert the number to a string to manipulate the digits
    num_str = str(num)
    
    # Sort the digits in descending order
    sorted_digits = sorted(num_str, reverse=True)
    
    # Join the sorted digits back into a string
    sorted_num_str = ''.join(sorted_digits)
    
    # Convert the string back to an integer
    sorted_num = int(sorted_num_str)
    
    return sorted_num