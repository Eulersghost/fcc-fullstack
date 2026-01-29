//write a function that will calculate factorial calculations

/*
New pseudocode: 

1. define variable num to store the numbers that we are computing
2. put a number there that I will use to calculate the factorial
3. setup factorial calculation, for example if it was 4!, then start from 1 and work my way up.
    3a. Worked example: 
    3b. num = 1, 
4. use a for loop, for counting through the factorial range.
5. create a factorialMsg to store the template literal.
6. when loop finishes print the factorial per the assignment directions using a template literal.
*/

function factorialCalculator(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  let resultMsg = `Factorial of ${num} is ${factorial}`;
  return resultMsg;
}

let num = 20;

let factorial = factorialCalculator(num);

console.log(factorial);


// Answer that was accepted had to do a lot of re-writing to make the function passable.

// function factorialCalculator(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }

// let num = 10;
// num = 5;
// num = 7;
// let factorial = factorialCalculator(num);
// let resultMsg = `Factorial of ${num} is ${factorial}`;

// console.log(resultMsg);
