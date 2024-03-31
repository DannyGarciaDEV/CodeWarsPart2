// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 
function logs(x , a, b){
    let sum = Math.log(a * b) / Math.log(x);
    return sum;
}