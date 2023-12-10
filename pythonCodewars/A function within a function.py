# Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

# three = always(3)
# three() /* returns 3 */

def always(n):
    return lambda: n

# Example usage:
three = always(3)
result = three()
print(result)  # Output: 3