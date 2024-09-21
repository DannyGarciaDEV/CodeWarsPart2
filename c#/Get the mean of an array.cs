// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// using System.Linq;
// using System.Collections.Generic;
// using System;

using System.Linq;
using System.Collections.Generic;
using System;

public class Kata
{
  public static int GetAverage(int[] marks)
  {
    // Sum all the marks and divide by the number of marks to get the average
    return marks.Sum() / marks.Length;
  }
}