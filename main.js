// ------------------------------------------------------------
// 2. Count the Positives and Sum the Negatives
// ------------------------------------------------------------

// Given an array of integers, return an array containing two values:
// 1. The count of positive numbers.
// 2. The sum of all negative numbers.

// Zero should be ignored. If there are no positive numbers, the count is 0.
// If there are no negative numbers, the sum is 0.

// Examples:
//   countPositivesSumNegatives([1, 2, 3, -1, -2, 0])
//   // [3, -3]

//   countPositivesSumNegatives([-4, -5, 0])
//   // [0, -9]

//   countPositivesSumNegatives([2, 8, 0])
//   // [2, 0]

//   countPositivesSumNegatives([])
//   // [0, 0]

// given an array of integers
// return an array with two values
// the # of occurences for positive numbers
// the sum of all the negative numbers

// countPositivesSumNegatives([0, 1, 1, 1, -10, -50])
// [3, -60]
// countPositivesSumNegatives([-1, -15, -12])
// [0, -28]
// countPositivesSumNegatives([0, 0, 0, 0,])
// [0, 0]

// initialize two variables, positivesCount and negativesSum. assign them to 0
// loop through the array
// if element is > 0, increment positivesCount by 1
// if element is < 0, add and reassign element to negativesSum
// initialize an array, countAndSum
// push positivesCount to the array, and then push negativesSum to the array
// return the array

function countPositivesSumNegatives(arr) {
  let positivesCount = 0;
  let negativesSum = 0;

  arr.forEach((e) => {
    e > 0 ? positivesCount++ : e < 0 ? (negativesSum += e) : "";
  });

  const countAndSum = [positivesCount, negativesSum];

  return countAndSum;
}

console.log(countPositivesSumNegatives([0, 1, 1, 1, -10, -50]))

console.log(countPositivesSumNegatives([-1, -15, -12]))

console.log(countPositivesSumNegatives([0, 0, 0, 0]))