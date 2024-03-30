// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30


function cockroachSpeed(s) {
    let speed = Math.floor(s * 100000 / 3600);
     return speed
   }