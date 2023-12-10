# DESCRIPTION:
# Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

# Example
# input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
# ouptut: 5 



def most_frequent_item_count(collection):
    if not collection:
        return 0
    
    # Count occurrences of each element in the collection
    count_dict = {}
    for item in collection:
        count_dict[item] = count_dict.get(item, 0) + 1

    # Find the maximum count
    max_count = max(count_dict.values())

    return max_count