// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

public class Kata
{
  public static string AbbrevName(string name)
  {
    // Split the name into two parts
    var names = name.Split(' ');
    
    // Take the first character of each name and capitalize it, then join with a dot
    return $"{char.ToUpper(names[0][0])}.{char.ToUpper(names[1][0])}";
  }
}
