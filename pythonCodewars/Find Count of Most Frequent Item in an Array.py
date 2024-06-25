# DESCRIPTION:
# Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

# Example
# input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
# ouptut: 5 
# The most frequent number in the array is -1 and it occurs 5 times.

def most_frequent_item_count(collection):
    if not collection:
        return 0
    
    frequency_dict = {}
    
    for item in collection:
        if item in frequency_dict:
            frequency_dict[item] += 1
        else:
            frequency_dict[item] = 1
    
    max_count = max(frequency_dict.values())
    
    return max_count