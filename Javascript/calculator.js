// function addTwoAndSeven (){ // return 2+7; // }







// console.log(addTwoAndSeven());
// console.log(addThreeAndFour());
let num, num1, num2;

// sum function
function calculateSum(num1, num2) {
  return num1 + num2;
}

// difference function
function calculateDifference(num1, num2) {
  return num1 - num2;
}

//product function
function calculateProduct(num1, num2) {
  return num1 * num2;
}

// quotient function
function calculateQuotient(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  } else {
    return num1 / num2;
  }
}

// square function
function calculateSquare(num) {
  return Math.pow(num, 2);
}

// sqrt function
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// running and testing the calculate difference function
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

// running tests for the product function
console.log(calculateProduct(13, 5));

// running test for the quotient function
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

// running test for the square function
console.log(calculateSquare(2));
console.log(calculateSquare(9));

//running tests for the sqrt function
console.log(calculateSquareRoot(9));
