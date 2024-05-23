def square_digits(num):
    # Convert the number to a string to iterate over each digit
    num_str = str(num)
    
    # Create an empty string to store the result
    result = ""
    
    # Iterate over each character in the string
    for digit in num_str:
        # Convert the character to an integer, square it, then convert back to string
        squared_digit = str(int(digit) ** 2)
        # Append the squared digit to the result string
        result += squared_digit
    
    # Convert the final concatenated string back to an integer
    return int(result)
