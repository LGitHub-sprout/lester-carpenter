/**************************** myMap() ************************** 
  from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#looping_through_a_collection
  
  How to use map():
  Pass a function into ARRAY.map(funcName), and map() calls the funcName function once for each item in the array, passing in the ARRAY item.
  It then ADDS THE RETURN VALUE FROM EACH FUNCTION CALL (what map() does internally; hint: how it works if I need to build a myMap()) to a new array, and finally returns the new array.
  In this case the function we provide converts the item to uppercase, so the resulting array contains all our ARRAY items in uppercase.

  // create myMap(arr, callbackFn) and pass arr and callbackFn params
  function myMap(arr, callbackFn) {
    // RETURNS a new array w each element being the result of the callback function, so I need to init a newArr.
    const newArray = [];
    // callbackFn: Function that is called for every element of arr (passed in).
    // Ea time callbackFn executes, the returned value is added to newArray.
    // Use loop and push() ea element to new array.
    for (let i = 0; i < arr.length; i++) {
      // save callbackResult as ea element FROM callbackFn that is looped,
      // then push ea element to newArray.
      // callbackFn is a FUNCTION so needs to be formatted like one I'd use normally if I wanted to call items in an array (i.e., bracket notation and i):
      // function(param, param).
      const callbackResult = callbackFn(arr[i]); // callback result is array ITEM param as passed into callback
      newArray.push(callbackResult); // then push ea looped result to new array
    }
    return newArray;
  }
  // Create new callback to use in myMap()
  function sumNums(num) {
    num + 2;
  }
  const nums = [2, 1, 3];
  const addNums = myMap(nums, (sumNums) => {
    console.log(sumNums * 2);
  });
*/

/**************************** filter() **************************
  Filter the names array content based on search criteria.
  Use filter() to filter an array by first letter "L".

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#searching_in_array

  // filter() only friends that start with letter 'e'
  friends.filter(function (element) {
    if (element.toLowerCase().startsWith('e')) console.log('Friends names starting w E ', element)
  });
*/
  
  const lastNames = [
    'Rosencrantz',
    'O*Toole',
    'Ornowski',
    'Johnson',
    'Ikeda'
  ];
const designations = [
  'Mrs.',
  'Mrs.',
  'Mr.',
  'Mr.',
  'Mr.'
];

// another myMap try
function myMap(arr, callback) {
  // creates a new array populated with the results of calling a provided function on every element in the calling array
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // save the result of looping thru array into the new callback function
    // note: format callback(param, param) as any other function 
    callbackResult = callback(arr[i]);
    // add each of the callback's items to the new array
    newArr.push(callbackResult);
  }
  return newArr;
}
function addTwo(a) {
  const sum = a + 2;
  return sum;
}
const anArray = [1, 3, 5];
// remember that the callback, addTwo in this case, is a stand-in for the looped array items in myMap()
const thingy = myMap(anArray, (addTwo));
console.log(thingy)
console.log(myMap(anArray, addTwo));


