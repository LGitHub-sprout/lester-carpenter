/*
  JavaScript Exercises for The Odin Project's JavaScript Foudations curriculum.

  @link https://github.com/TheOdinProject/javascript-exercises
*/


/************************* # Exercise 06 - leapYears()  *********************

  Create a function that determines whether or not a given year is a leap year. 

  ```javascript
  leapYears(2000) // is a leap year: returns TRUE
  leapYears(1985) // is not a leap year: returns FALSE
  ```
  Leap years are determined by the following rules:
  > Leap years are years divisible by four (like 1984 and 2004). 
  However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

  (leapYear % 4 === 0 OR leapYear % 400 === 0) AND leapYear % 100 !== 0 
  (leapYear % 4 === 0 AND leapYear % 100 !== 0)

  My rewording to simplify:
  Can all conditional logic work in one expression?
  Leap years are years divisible by four (like 1984 and 2004) with 0 remainder. 
    * however * is indication that another conditional check is needed?
  However, years divisible by 100 are not leap years (such as 1800 and 1900)
    even tho they are divisible by 4 with 0 remainder,
    unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 

  Criteria:
    leap years are divisible by 4: 1984 and 2004, but
    years divisible by 100 are NOT leap years: 1800 and 1900, unless // exception 1
    they are divisible by 400: 1600 and 2000 which are leap years. // exception to exception 1

  Plain English pseudocode - 
    Leap years must:
    divide by 4 evenly (remainder zero %) AND 
    divide by 400 evenly (remainder zero %)
      but some leap years won't fit BOTH cases: 1996, 34992
    Okay, genius... the description appears to be giving you the logic.
    FOLLOW IT FIRST!
      


  Pseudocode:
    if year % 4 === 0 AND year % 400 === 0 then return true
    otherwise, return false
  2:30pm
    leap years 1996, 34992 break this logic (remainder after % 400).
     
    
    @param    year  integer
  
    @return   true or false

  test('works with non century years', () => {
  expect(leapYears(1996)).toBe(true);

  test.skip('works with non century years', () => {
  expect(leapYears(1997)).toBe(false);

  test.skip('works with ridiculously futuristic non century years', () => {
  expect(leapYears(34992)).toBe(true);

  test.skip('works with century years', () => {
  expect(leapYears(1900)).toBe(false);

  test.skip('works with century years', () => {
  expect(leapYears(1600)).toBe(true);

  test.skip('works with century years', () => {
  expect(leapYears(700)).toBe(false);
  */
  const leapYears = function (year) {

    // BOTH conditions need to be true
    // (leapYear % 4 === 0 AND leapYear % 100 !== 0)
    if (year % 4 === 0 && year % 100 !== 0) {
      return 'True -- Leap year.';
      } 
      return 'False'
    };
  // 1600 year breaks -- needs divisible by 400 rule applied
  // console.log(leapYears(700));
  
  // breaks at 34992 % 400 w remainder
  // breaks at 1996 % 400 w remainder
  
  const years = [1996, 1997, 34992, 1900, 1600, 700];
  // leap years: 1996, 34992, 1600
  // not leap years: 1997, 1900, 700
  const yearsLoop = function (arr) {
    
    for (let i = 0; i < arr.length; i++) {
      let leapYears = 0;
      let notLeapYears = 0;
      // let element;
      // console.log(i) // just the index
      console.log(arr[i])
      if (arr[i] % 4 === 0 && arr[i] % 100 !== 0) {
        leapYears += arr[i];
        // console.log(leapYears)
        console.log('leap year ', arr[i]);
      }
      notLeapYears += arr[i];
      // console.log('not leap years', notLeapYears)
      // console.log('not leap year', arr[i])
    }
  }
  console.log(yearsLoop(years))  



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

  if (typeof minNum !== 'number' || typeof maxNum !== 'number') return 'ERROR';
  
  for (let i = minNum; i <= maxNum; i++) { // i always needs to be lowest num
    if (firstNum < 0 || secondNum < 0) return 'ERROR';
    
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
  
  @var    arrIndex    array item's indexes (to test against theArgs)
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

