/*
  JavaScript Exercises for The Odin Project's JavaScript Foudations curriculum.

  @link https://github.com/TheOdinProject/javascript-exercises
*/

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
  for (i = 0; i < number; i++) {
    repeatedString += string;
  }
  return repeatedString;
};
repeatString('hey', 3);


/***********************************************************
  # Exercise 03 - Reverse a String

  Pretty simple, write a function called `reverseString` that returns its input, reversed!

  ```javascript
  reverseString('hello there') // returns 'ereht olleh'
  ```
*/
const reverseString = function (string) {
  return string.split('').reverse().join('');
};


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
        arrIndex = arr.indexOf(arr[k]);
        const spliceArr = arr.splice(arrIndex, 1);
      }
    }
  }
  return arr;
}
removeFromArray([1, 2, 3, 4], 4, 3);
