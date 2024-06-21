# DESCRIPTION:
# It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

# Return the average of the given array rounded down to its nearest integer.

# The array will never be empty.

def get_average(marks):
    # Calculate the sum of all marks
    total_sum = sum(marks)
    
    # Calculate the number of marks
    count = len(marks)
    
    # Calculate the average and round down by using integer division
    average = total_sum // count
    
    return average