/**
 * Calculation tax in Australia
 * - Under 18200, tax = 0
 * - 18201 --> 37000, tax = 19 cent / $1
 * - 37001 --> 87000, tax = 32.5 cent / $1
 * - 87001 --> 180000, tax = 37 cent / $1
 * - over 180000, tax = 45 cent / $1
 */
function calculateTax(income) {
    var thresholdNoTax = 18200;
    var threshold19 = 37000;
    var threshold32_5 = 87000;
    var threshold37 = 180000;
    if (income < thresholdNoTax) {
        return 0;
    }
    var tax45 = income > threshold37 ? (income - threshold37) : 0;
    var tax37 = tax45 > 0 ? (threshold37 - threshold32_5) : (income > threshold32_5 ? (income - threshold32_5) : 0);
    var tax32_5 = tax37 > 0 ? (threshold32_5 - threshold19) : (income > threshold19 ? (income - threshold19) : 0);
    var tax19 = tax32_5 > 0 ? (threshold19 - thresholdNoTax) : (income > thresholdNoTax ? (income - thresholdNoTax) : 0);
    return ((tax45 * 45 + tax37 * 37 + tax32_5 * 32.5 + tax19 * 19) / 100).toFixed(2);
}
// TESTING
console.log(calculateTax(45050));
console.log('=========================');
console.log(calculateTax(23100));
console.log('=========================');
