/* 
 * Array Exercises from https://www.w3schools.com/js/js_arrays.asp 
 * 
 * Revisit looping through objects.
 * https://www.codegrepper.com/code-examples/javascript/for+loop+for+object+in+javascript+mdn 
 *  const catClients = {
 *    name: 'Toby',
 *    age: 9,
 *    human: 'Jen'
 *  } // object
*/
const arraysh2 = document.querySelector('.article-body-wrap.arrays h2');
const arraysList = document.createElement('ul');
arraysList.setAttribute('class', 'arraysList');
arraysh2.insertAdjacentElement('afterend', arraysList);

const catClients = [
  'Twyla kitty',
  2,
  'Hannah',
  'Toby cat',
  9,
  'Jen'
] // array

// Add array element at the END with .push method
catClients.push('Sammie');
// ALSO returns the new array LENGTH

// Add array element at the END using length property and bracket notation
catClients[catClients.length] = 10; // add number 10 to end of array
const catClientLength = catClients.push('Teddy'); // adds to the end of array 
catClients[catClients.length] = 'poop'; // also adds element to END of array
console.log('catClientLength is: ', catClientLength);

for (i = 0; i < catClients.length; i++) {
  // add ea array element as a list item to the <ul>
  const arrayContent = catClients[i];
  const listItems = document.createElement('li');
  arraysList.append(listItems);
  listItems.textContent = `${arrayContent}`;
}; // for loop

// .toString() converts an array to a string of comma separated values
const fruits = ['Oscar Wilde', 'Liberace', 'Elton John'];
// const stringOfFruits = fruits.toString();
// console.log(stringOfFruits);
// console.log('stringOfFruits is now a string: ', typeof (stringOfFruits));

// concat() creates a new array by merging (concatenating) existing arrays.
// concat() takes strings, nums, booleans (any number of args)
// merging an array with values
const newArray = catClients.concat(fruits, "New Client", 101, true, false);
// console.log(newArray);

// .pop() items off an array at the END; .push() items onto an array at the END.
// fruits.pop(); // removes last element of array
// console.log(fruits.join(', '));
// fruits.push('Kd Lang');
// console.log(fruits.join(', '));

// shift() method removes FIRST element in an array, shifts others to lower index.
// It also RETURNS the value that was shifted off the array.
fruits.shift(); // removes FIRST element of array
// console.log(fruits); // logs "Liberace, Elton John"
const fruit = fruits.shift(); // removes another FIRST element "Liberace"
// console.log(fruit) // returns Liberace bc was shifted off above

// unshift() adds new element to an array at BEGINNING and ALSO returns the new array LENGTH
fruits.unshift('Freddy Mercury'); // Adds new element to BEGINNING of array
// console.log(fruits.unshift()); // returns length

// static method: Array.isArray(arrayName) returns boolean T or F

// splice() method adds AND/OR replaces contents of an array by removing or replacing existing elements AND/OR adding new elements "in place", meaning deletes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// 1st param: where new items are added (spliced in)
// 2nd param: how many elements to be removed
// rest of params: new elements to be added
// returns array of deleted items? it's confusing 
fruits.splice(2, 0, 'Kd Lang'); // add at zeroeth place, delete nothing
// console.log('spliced fruits array: ', fruits);
console.log(fruits);
const deletedFruits = fruits.splice(0, 2).length;
// const deletedFruits = fruits.length; // length of fruits array before 'splice'
console.log('Length of deletedFruits array: ', deletedFruits);

// toString() stuff
// fruits.toString();
// console.log(typeof fruits); // still an object
// const fruitsToString = fruits.toString(); // now it's a string
// console.log(fruitsToString);
// console.log('fruits is a string after saving it to a new var: ', typeof fruitsToString);

// .join also converts to string, adds separator option
// const stringOfFruits = fruits.join(', ');
// console.log(stringOfFruits);



// // Object 
// const student = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };
// // using for...in on object
// for (let key in student) { 
//     let value;

//     // get the value
//   value = student[key];
  
//   console.log(key + " - " +  value); 
// } 
