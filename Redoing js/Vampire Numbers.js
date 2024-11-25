// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
function vampireTest(a, b) {
    const product = a * b;

    // Convert all numbers to strings and sort their digits
    const productDigits = product.toString().split('').sort().join('');
    const factorsDigits = (a.toString() + b.toString()).split('').sort().join('');

    // Compare sorted strings
    return productDigits === factorsDigits;
}