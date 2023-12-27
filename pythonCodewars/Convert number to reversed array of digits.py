


def digitize(n):
    # Convert the number to a string, reverse it, and convert each character to an integer
    return [int(digit) for digit in str(n)[::-1]]

# Examples
print(digitize(35231))  # Output: [1, 3, 2, 5, 3]
print(digitize(0))  