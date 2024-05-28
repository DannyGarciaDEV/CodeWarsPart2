# In this kata you will create a function that takes in a list and returns a list with the reverse order.

# Examples (Input -> Output)
# * [1, 2, 3, 4]  -> [4, 3, 2, 1]
# * [9, 2, 0, 7]  -> [7, 0, 2, 9]

def reverse_list(l):
    """
    Return a list with the reverse order of l.

    :param l: List of elements to be reversed
    :return: Reversed list
    """
    return list(reversed(l))