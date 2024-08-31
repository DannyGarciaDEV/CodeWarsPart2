// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
using System;
using System.Linq;

public class Kata
{
    public static string Reverse(string text)
    {
        // Split the input string by spaces into an array of words
        string[] words = text.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
        
        // Reverse the array of words and join them back into a single string
        return string.Join(" ", words.Reverse());
    }
}