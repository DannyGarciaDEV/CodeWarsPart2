# Complete the function/method so that it returns the url with anything after the anchor (#) removed.

# Examples
# "www.codewars.com#about" --> "www.codewars.com"
# "www.codewars.com?page=1" -->"www.codewars.com?page=1"



def remove_url_anchor(url):
    anchor_index = url.find('#')  # Find the index of '#'
    if anchor_index != -1:  # If '#' exists
        return url[:anchor_index]  # Return the substring before '#'
    else:
        return url  # Return the original URL if no '#' found


#nice