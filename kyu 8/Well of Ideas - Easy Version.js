function well(x) {
    // Count the number of good ideas
    const goodIdeasCount = x.filter(idea => idea === 'good').length;

    // Check the count and return the appropriate message
    if (goodIdeasCount === 0) {
        return 'Fail!';
    } else if (goodIdeasCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}