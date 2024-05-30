# Description:

# You're a huge ENHYPEN fan, and you've just purchased several albums, hoping to get your favorite member Jake's photocard. Given the number of albums you bought, you want to know the probability of getting at least one Jake's photocard.

# In this challenge, you will write a function that calculates this probability.

# Task:

# Write a def probability_of_getting_jake(numAlbums);
# that takes an integer numAlbums representing 
# the number of albums you have and returns the probability 
# (as a decimal) of getting at least one Jake's photocard.

# Each album contains exactly one photocard,
# and there are 7 different photocards in total, one for each member of ENHYPEN.



def probability_of_getting_jake(numAlbums):
    probability_not_getting_jake = (6 / 7) ** numAlbums
    probability_getting_jake = 1 - probability_not_getting_jake
    return round(probability_getting_jake, 4)  