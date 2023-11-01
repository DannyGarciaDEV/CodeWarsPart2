// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)


function hero(bullets, dragons) {
    // Calculate the number of bullets needed to defeat all dragons
    let bulletsNeeded = dragons * 2;
    
    if (bullets >= bulletsNeeded) {
      // The hero has enough bullets to defeat the dragons
      return true;
    } else {
      // The hero doesn't have enough bullets to defeat the dragons
      return false;
    }
  }
  
  // we want to see how many bullets the dragon can takd 
  // we want to see if the number of the dragon is double of the bullets 
  //the hero has
  // we want to complare if the bullets times 2 are greater than the dragon
  
  
  