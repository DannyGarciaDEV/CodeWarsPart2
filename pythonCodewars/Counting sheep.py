# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

# For example,

# [True,  True,  True,  False,
#   True,  True,  True,  True ,
#   True,  False, True,  False,
#   True,  False, False, True ,
#   True,  True,  True,  True ,
#   False, False, True,  True]



def count_sheeps(sheep):
    # Initialize a counter for the number of present sheep
    count = 0
    # Iterate through the list of sheep
    for s in sheep:
        # Check if the current value is True
        if s is True:
            count += 1
    return count

