# The code provided is supposed return a person's Full Name given their first and last names.

# But it's not working properly.

# Notes
# The first and/or last names are never null, but may be empty.

# Task
# Fix the bug so we can all go home early.

class Dinglemouse(object):
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        
    def get_full_name(self):
        # Remove leading and trailing spaces if any
        self.first_name = self.first_name.strip()
        self.last_name = self.last_name.strip()
        
        # Check if either name is empty
        if not self.first_name or not self.last_name:
            return self.first_name + self.last_name
        
        # Check if there's no space between first and last names
        if self.first_name[-1] != ' ' and self.last_name[0] != ' ':
            return self.first_name + ' ' + self.last_name
        else:
            return self.first_name + self.last_name