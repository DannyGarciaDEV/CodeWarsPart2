# The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes. The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element. There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years. The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.

# Since the current calendar is Gregorian, I will only be using years from the epoch 1924. For simplicity I am counting the year as a whole year and not from January/February to the end of the year.

# ##Task

# Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".

# animals (or $animals in Ruby) is a preloaded array containing the animals in order:

# ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

# elements (or $elements in Ruby) is a preloaded array containing the elements in order:

# ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

# Tell me your zodiac sign and element in the comments. Happy coding :)

def chinese_zodiac(year):
    animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
    elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
    
    # The starting year is 1984 which is Wood Rat
    base_year = 1984
    
    # Calculate the difference in years from the base year
    year_diff = year - base_year
    
    # Determine the animal (mod 12)
    animal_index = year_diff % 12
    animal = animals[animal_index]
    
    # Determine the element (each element spans 2 years, hence dividing the year_diff by 2)
    element_index = (year_diff // 2) % 5
    element = elements[element_index]
    
    return f"{element} {animal}"