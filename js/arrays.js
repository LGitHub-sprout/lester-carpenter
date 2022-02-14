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

for (i = 0; i < catClients.length; i++) {
  // add ea array element as a list item to the <ul>
  arrayContent = catClients[i];
  const listItems = document.createElement('li');
  arraysList.append(listItems);
  listItems.textContent = `${arrayContent}`;
}; // for loop

// const student = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };
// using for...in on object
// for (let key in student) { 
//     let value;

//     // get the value
//     value = student[key];

//     console.log(key + " - " +  value); 
// } 
