// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

public class Positive {

    public static int sum(int[] arr) {
        int total = 0;
        for (int num : arr) {
            if (num > 0) {
                total += num;
            }
        }
        return total;
    }

}