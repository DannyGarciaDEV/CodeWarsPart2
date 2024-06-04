# Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

# Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

# Examples:

# n =  1:    ["#010101"]
# n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]

def shades_of_grey(n):
    """
    Return an array containing n shades of grey in hexadecimal code.
    
    :param n: Number of shades to generate
    :return: List of shades in hexadecimal format
    """
    if n <= 0:
        return []
    
    shades = []
    for i in range(1, min(n, 256)):  # Only up to 255 valid shades
        hex_value = format(i, '02x')  # Convert to hexadecimal and ensure 2 characters
        shade = f'#{hex_value}{hex_value}{hex_value}'  # Form the shade of grey
        shades.append(shade)
    
    return shades