/*
  JavaScript Exercises for The Odin Project's JavaScript Foudations curriculum.

  @link https://github.com/TheOdinProject/javascript-exercises
*/

/***********************************************************
  # Exercise 05 - sumAll

  Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

  ```javascript
  sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
  ```
  Pseudocode:
  Beginning w minNum, loop to maxNum
  Add ea iteration result to the next, sequentially
  so that sumTotal is minNum +1 until maxNum is reached.
  Return sumTotal

  possible solutions to 
  sumAll(123, 1)); // works with larger number first .toEqual(7626)
    the problem is that i'm setting i to firstNum and decrementing thru loop
      to add each iteration to sumTotal.
      if the args are reversed then this logic fails.
    could i save one var for the other if secondNum > firstNum?
    Could i set i to always be biggest num regardless of whether that's firstNum or second Num?

  @param  firstNum     integer
  @param  secondNum    integer
  @param  sumTotal     integer
  https://stackoverflow.com/questions/12691142/javascript-for-loop-until-multiple-conditions
*/ 
const sumAll = function (firstNum, secondNum) {

  let sumTotal = 0;
  // if i = 0; then how do i know whether to decrement or increment?
  
  // if (firstNum > 1) {
  //   i = secondNum; 
  //   // console.log('firstNum: ', firstNum)
  //   // console.log('secondNum: ', secondNum)
  // }
  for (let i = firstNum; i <= secondNum; i++) {
    if (firstNum < 0 || secondNum < 0) return 'ERROR';
    if (typeof firstNum === 'string' || typeof secondNum === 'string') return 'ERROR';

    sumTotal += i; // adds indexes to sumTotal as it loops 
  }
  console.log(sumTotal) // return sumTotal for testing purposes
};
console.log(sumAll(1, 4000)); // works with larger number first .toEqual(7626) if 
// (let i = firstNum; i >= secondNum; --i)

// console.log(sumAll(123, 1)); // works with larger number first .toEqual(7626) if 
// console.log(sumAll(10, [90, 1])); // works with larger number first .toEqual(7626)
// console.log(sumAll(10, "90")); // works with larger number first .toEqual(7626)
// console.log(sumAll(-10, 4)); // works with larger number first .toEqual(7626)

/* PASSED */
// console.log(sumAll(1, 4000)); // works with large numbers .toEqual(8002000)
// console.log(sumAll(1, 4)); // returns the sum of 1 + 2 + 3 + 4 which is 10

/*
  Working on 3rd test 'larger number first'
  // if (firstNum > 1) {
  //   i = secondNum; 
  //   // console.log('firstNum: ', firstNum)
  //   // console.log('secondNum: ', secondNum)
  // }
  for (let i = firstNum; i >= secondNum; i--) {
    if (firstNum < 0 || secondNum < 0) return 'ERROR';
    if (typeof firstNum === 'string' || typeof secondNum === 'string') return 'ERROR';
*/


/***********************************************************
  # Exercise 04 - removeFromArray

  Implement a function that takes an array and some other arguments then removes the other arguments from that array:

  ```javascript
  removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
  ```s

  https://www.good-codes.com/remove-multiple-elements-from-array-es/
  
  @param  arr
  @param  theArgs     Multiple args provided to remove.
  
  @var    index       ...theArgs item's index
  @var    splicearr   spliced array
  
  Pseudocode:
  Loop through theArgs array
  if arr includes items from theArgs array
  save 'index' as theArgs item's index
  save spliceArr as spliced arr using index variable as start index, 1 as end
  return arr 
*/
const removeFromArray = function (arr, ...theArgs) {
  for (let i = 0; i < theArgs.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (theArgs[i] === arr[k]) {
        const arrIndex = arr.indexOf(arr[k]);
        const spliceArr = arr.splice(arrIndex, 1);
      }
    }
  }
  return arr;
};
removeFromArray([1, 2, 3, 4], 4, 3);

/***********************************************************
  # Exercise 03 - Reverse a String

  Pretty simple, write a function called `reverseString` that returns its input, reversed!

  ```javascript
  reverseString('hello there') // returns 'ereht olleh'
  ```
Looping method (no built-in methods)
pseudocode:
Reverse a string without using the array reverse() method.
Instead, try doing it without built-in methods.
  save newString as an empty string.
  loop over string BEGINNING AT THE END of the string
  saving each index from the end to the beginning into newString.
  the returned string should be reversed.
  return newString 

  const reverseString = function (str) {
    newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  };
*/

console.log(reverseString(''));
const reverseString = function (string) {
  return string.split('').reverse().join('');
};

/***********************************************************
  Exercise 02 - repeatString

  Write a function that simply repeats the string a given number of times:

  ```javascript
  repeatString('hey', 3) // returns 'heyheyhey'
  ```
*/
const repeatString = function (string, number) {
  let repeatedString = '';
  if (number < 0) return repeatedString += 'ERROR';
  for (let i = 0; i < number; i++) {
    repeatedString += string;
  }
  return repeatedString;
};
repeatString('hey', 3);

