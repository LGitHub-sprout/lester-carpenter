/*
  JavaScript Exercises for The Odin Project's JavaScript Foudations curriculum.

  @link https://github.com/TheOdinProject/javascript-exercises
*/

/************************* # Exercise 05 - sumAll()  *********************

  Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
  
  ```javascript
  sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
  ```
  Notes:
  https://stackoverflow.com/questions/12691142/javascript-for-loop-until-multiple-conditions
  Math.max and Math.min but nums need to be in an array

  Pseudocode: (not how the algorithm went, lol but it got done.)
    Beginning w firstNum, loop to secondNum
    Add ea iteration result counter to the next, sequentially,
    so that sumTotal is minNum +1 until maxNum is reached.
    Return sumTotal

  problem: 
  sumAll(123, 1)); // doesn't with larger number first .toEqual(7626)
    the problem is that i'm setting i to firstNum and incrementing thru loop
      to add each iteration to sumTotal.
      if the args are reversed then this logic fails due to condition = false.
    could i save one var for the other if secondNum > firstNum? no, hoisting.
      this is the answer that I used to solve it and used variables in if/else stmt.
    Could I set i to always be biggest num regardless of whether that's firstNum or second Num?
      Not sure how. 
    Larger num first works if conditional is >=; and i-- decremented
      are such things are multiple conditional loops
      or can i set if stmts first, then loop? again, no--hoisting.
        On the right track here... and ultimately used variables this way.
    
    what appears to be the point of this one?
      there has to be clues in the link
      that i can use multiple conditions in a loop?
      that i can use if conditional to run multiple different loops?

    Pseudocode: fixes "large number first"
    if firstNum is greater than secondNum 
      set maxNum to firstNum // save firstNum to diff var for processing
      set minNum to secondNum
    else if firstNum is less-than  
    while the counter is less than maxNum
      increment the counter;
      if (firstNum < secondNum)

  @param  firstNum  integer
  @param  secondNum integer

  @var    sumTotal  integer
  @var    minNum    integer
  @var    maxNum    integer

  @return sumTotal
*/ 
const sumAll = function (firstNum, secondNum) {
  let sumTotal = 0;

  if (firstNum > 1) {
    minNum = secondNum; 
    maxNum = firstNum;
  } else if (firstNum < secondNum) {
    minNum = firstNum;
    maxNum = secondNum; 
  }
  // if (firstNum !== 'number' || secondNum !== 'number') return 'ERROR';

  if (typeof minNum !== 'number' || typeof maxNum !== 'number') return 'general ERROR';
  
  for (let i = minNum; i <= maxNum; i++) { // i always needs to be lowest num
    if (firstNum < 0 || secondNum < 0) return 'negative number ERROR';
    
    sumTotal += i; // adds indexes to sumTotal as it loops 
  }

  console.log(typeof sumTotal, sumTotal) //  return sumTotal;
};
console.log(sumAll(-10, 4));

/************************* # Exercise 04 - removeFromArray()  *********************
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

/************************* # Exercise 03 - reverseString() *********************

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

/************************* # Exercise 02 - repeatString() *********************

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

