// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
function betterThanAverage(classPoints, yourPoints) {
    // Calculate the sum of class points
    const totalClassPoints = classPoints.reduce((sum, score) => sum + score, 0);
    // Calculate the average
    const averageClassPoints = totalClassPoints / classPoints.length;
    // Compare your points to the average
    return yourPoints > averageClassPoints;
}
