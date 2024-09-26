// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
using System;

namespace Solution
{
    public class TwiceAsOldSolution
    {
        public static int TwiceAsOld(int dadYears, int sonYears)
        {
            // Calculate the difference in age where the father will be twice the son's age
            return Math.Abs(dadYears - 2 * sonYears);
        }
    }
}
