# Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

# (In C# Integer means all integer Types like Int16,Int32,.....)

# Examples
def powerof4(n):
    # Check if n is less than or equal to 0, which cannot be a power of 4
    if n <= 0:
        return False
    # Continuously divide n by 4
    while n % 4 == 0:
        n /= 4
    # If the result is 1, then n is a power of 4
    return n == 1