// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

public class Maps {
  public static int[] map(int[] arr) {
    // Create a new array to store the results
    int[] result = new int[arr.length];
    
    // Iterate through the input array and double each element
    for (int i = 0; i < arr.length; i++) {
      result[i] = arr[i] * 2;
    }
    
    // Return the resulting array
    return result;
  }
}
}