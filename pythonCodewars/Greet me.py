# Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

# Example:

# "riley" --> "Hello Riley!"
# "JACK"  --> "Hello Jack!"

def greet(name):
    # Capitalize the first letter of the name and make the rest lower case
    capitalized_name = name.capitalize()
    # Create the greeting message
    greeting = f"Hello {capitalized_name}!"
    return greeting
