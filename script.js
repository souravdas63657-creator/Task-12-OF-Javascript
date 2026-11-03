// 1. Set up the numbers for your formula
let P = 50000; // Principal (starting money)
let r = 0.05; // Interest rate (5% written as a decimal)
let n = 12;   // Compounded 12 times a year (monthly)
let t = 3;    // Time in years

// 2. The formula: A = P(1 + (r/n))**nt
let A = P * (1 + (r / n)) ** (n * t);
let ci = A - P;

// Result Showing

console.log("The Amount After 3 yers is: ", Number(A.toFixed(2)));

console.log("The Compond interest after 3 years is: ",Number(ci.toFixed(2)));