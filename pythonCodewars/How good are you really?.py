# DESCRIPTION:
# There was a test in your class and you passed it. Congratulations!
# But you're an ambitious person. You want to know if you're better than the average student in your class.

# You receive an array with your peers' test scores. Now calculate the average and compare your score!

# Return True if you're better, else False!

# Note:
# Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



def better_than_average(class_points, your_points):
    # Calculate the average of the class points
    class_average = (sum(class_points) + your_points) / (len(class_points) + 1)

    # Compare your average with the class average
    return your_points > class_average

# Example usage:
class_scores = [75, 80, 85]
your_score = 90
result = better_than_average(class_scores, your_score)
print(result)  # Output: True