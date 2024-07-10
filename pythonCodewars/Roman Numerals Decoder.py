# Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

# Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

def solution(roman: str) -> int:
    # Define a dictionary to map Roman numerals to their integer values
    roman_to_int = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    # Initialize the integer value to be returned
    total = 0
    # Initialize a variable to keep track of the previous numeral value
    prev_value = 0

    # Iterate over the Roman numeral from right to left
    for char in reversed(roman):
        # Get the integer value for the current Roman numeral
        value = roman_to_int[char]

        # If the current value is less than the previous value, subtract it from the total
        if value < prev_value:
            total -= value
        else:
            # Otherwise, add it to the total
            total += value

        # Update the previous value to the current value
        prev_value = value

    return total