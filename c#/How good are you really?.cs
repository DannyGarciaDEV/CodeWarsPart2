// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

using System.Linq;

public class Kata
{
    public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
    {
        // Calculate the average score of the class
        double average = (double)ClassPoints.Sum() / ClassPoints.Length;

        // Compare your score to the class average
        return YourPoints > average;
    }
}
