// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
function past(h, m, s) {
    // Convert hours, minutes, and seconds to milliseconds
    const hoursToMs = h * 60 * 60 * 1000;
    const minutesToMs = m * 60 * 1000;
    const secondsToMs = s * 1000;

    // Sum them up
    return hoursToMs + minutesToMs + secondsToMs;
}