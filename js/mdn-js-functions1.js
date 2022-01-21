// MDN Functions Assmts
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions#functions_1
  // DOM manipulation: createElement(), textContent, appendChild() or append()
  // Create a simple function, chosenName() that prints a random name from the provided array, names, to created 'para' element and run it once.
  const names = [
  'Sexy Mike',
  'Li\'l Kang',
  'Rosie',
  'Krista',
  'Liz',
  'Barney',
  'Gesh',
  'Shivaun',
  'Lester'
  ];
  function chooseName() {
    h2 = document.querySelector('h2');
    const para = document.createElement('p');
    para.setAttribute('class', 'func1Assmt');
    h2.insertAdjacentElement('afterend', para);
    // save length of array in var dynamically in case it changes
    const namesLength = names.length;

    // I don't want user to have to pass values; therefore, I'll want function to choose btwn a range of two values automatically, the max being the number of items in the actual array.
    // print an item the array
    // return para.textContent = names[3]; // prints 'Krista'
    // console.log(Math.random() * (namesLength - 0) + 0);

    // Functions 3 uses random() function in chooseName() 
    const randomNum = parseInt(Math.random() * (namesLength - 0));
    console.log(randomNum);
    // console.log('randomNum is whole number now ', parseInt(randomNum));
    // console.log('randomNum is type: ', typeof randomNum);
    // return para.textContent = Math.random() * (namesLength - 0);
    // return para.textContent = parseInt(randomNum);
    return para.textContent = names[randomNum];
}
chooseName();

// https://javascript.info/function-expressions 
// function ask(question, yes, no) {
//   if ( confirm(question) ) yes() //, console.log('yes, poop')
//   else no() //, console.log('no, poop') 
// }
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//     alert('Huh?'); // always runs unless separated w curly braces
//   }
// }
// shorter (better practice? no missing semi-colons, curly braces, etc.)
// function ask(question, yes, no) {
//   confirm(question) ? yes() : no();
// }
// ask(
//   'Do you agree?',
//   function() { alert('You agreed') },
//   function() { alert('You canceled exectution') }
// );

// let age = prompt("What is your age?", 18);
// let welcome; // init the variable outside conditional stmt to change scope
// // Conditionally declare a function
// if (age < 18) {
//   welcome = function () {
//     alert("Hi, sweetie you\'re not over 18.");
//   }
// } else {
//   welcome = function () {
//     alert("Greetings, old timer :)!");
//   }
// }
// welcome(); // Don't forget to invoke the function!

// Conditionally declare function using ternary operator ? (on two lines)
// let welcome = (age < 18) ?
//   function () { console.log('You\'re not over 18, sorry.') } :
//   function () { console.log('Hello, old timer :)') };
//   // Don't forget to run the function
//   welcome();

// Use curly braces, otherwise expect unexpected results.
// https://medium.com/@jonathanabrams/single-line-if-statements-2565c62ff492
// let poop;
// let whatever = prompt('Enter a number', 18);
// if (whatever >= 18) {
//   console.log('this is the ORIGINAL UNSPOKEN truth');
//   console.log('this is true');
//   console.log('this is true #2');
//   console.log('this is true #3');
//   console.log('this is true #4');
//   console.log('this is the next to last truth');
//   console.log('this is the LAST truth');
// }
  
// // Function return MDN exercise
// const squaredNum = num => console.log(`${num} squared is ${num * num}`);
// // console.log(`The square root of 36 is ${Math.sqrt(36)}`);

// // From Function Returns - Active Learning
//   const mdnInput = document.getElementsByClassName('numberInput');
//   const mdnDiv = document.getElementById('mdn-function-library');
//   // const pSquared = document.createElement('p');
//   // pSquared.setAttribute('class', 'pSquared');
//   const pSquared = document.getElementsByClassName('squared');
//   const pCubed = document.getElementsByClassName('cubed');

// const num = 'poop';
//   // mdnDiv.appendChild(pSquared).append('poopy shite ', num);
//   function numSquared(num) {
//     return num * num;
//   } 
//   function numCubed(num) {
//     return num * num * num;
//   }
// function factorial(num) { // 4
//   if (num < 0) return undefined;
//   if (num < 0) return 1;
//   let x = num - 1;
//   while (x > 1) {
//     num *= x;
//     x--;
//   }
// return num; // 24
// }
  
// TOP Foundations 3 – Functions 
// const pFavAnimal = document.getElementById('favAnimal');
// function favoriteAnimal(goat) {
//   console.log(`The ${goat} is my favorite animal.`);
//   return pFavAnimal.textContent = `The ${goat} is my favorite animal.`;
// }
// favoriteAnimal('giraffe');  

// JavaScript.info 'Functions'
// https://www.javascripttutorial.net/es6/javascript-default-parameters/
// https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter
  // function showMessage(from, text = 'no message provided') {
// function showMessage(from, text = anotherFunction()) {

//   console.log(from + ': ' + text); // used for below tests
//   // text = 'I reassigned the "text" variable inside showMessage'; // works if I run w an arg
//   // return `This is showMessage return stmt. From: ${from} and TEXT: ${text}`;

//   // anotherFunction(console.log('Hello, from anotherFunction')); // doesn't work
//   // function anotherFunction() {
//   //   console.log('Hello, from anotherFunction');
// }
  // run showMessage in console and NOT defining anotherFunction (commented out):
    // works if I call showMessage with BOTH args
    // works if I reassign text in showMessage AND call w BOTH args BUT returns value set in function NOT one passed in console.
    // returns 'anotherFunction is not undefined' in all other cases

  //fun showMessage in console WITH anotherFunction DEFINED below
    // works without including either arg but 'from' is 'undefined'

// function anotherFunction() {
//   // text += 'Why can\'t I get this to work?'; // doesn't work
//   return 'This text is from the "anotherFunction" parameter.';
//   // console.log('Why can\'t I get this to work?');
// }

// function showMessage(from, text = anotherFunction()) {
//   from = console.log(from + ': ' + "works hard on JS.");
//   // console.log('only executed if no text given');
//   // its result becomes the value of text
// }
// function anotherFunction() {
//   // return 'Si, claro!'; doesn't work
//   console.log('Does this work?');
// }
// Alternative default params – if stmt and OR stmt
// function message(text) {
//   // if (text === undefined) { // type checking
//   //   text = 'empty message';
//   // }
//   text = text || 'empty message';
//   alert(text);
// }
// message('whatever');

// https://javascript.info/function-basics#alternative-default-parameters
// function showMessage(text) {
//   // if (text === undefined) { // missing arg
//   //   text = 'There\'s no text';
//   // }
//   // or could use || operator
//   text = text || 'No text using || operator';
//   console.log(text);
// }

// Nullish Coalescing 
  // function showCount(count) {
  //   // if count is undefined or null, show "unknown"
  //   console.log(count ?? "they no count variable");
  // }
  // function showNum(num) {
  //   console.log(num ?? 'They ain\'t no num variable');
  // }

// define a function called checkAge and pass a param, age
// if age is greater than or equal to 18, return true
// otherwise, return a confirm msg 'Do you have permission from your parents?'
// assign age a prompt msg 'How old are you?' and pass in 18
// write a conditional using checkAge function to send an alert 'Access granted' or 'Access denied' depending on age.
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parent\'s permission?');
//   }
// }
// let age = prompt('Enter your age', 18);
// if (checkAge(age)) {
//   alert('Access granted');
//   alert('Starting the movie...');
// } else {
//   alert('Access denied');
// }
// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }
// }

// function showPrimes(n) { 
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i); 
//   }
// }

// function isPrime(n) {  
//   for (let i = 2; i < n; i++) { 
//     if (n % i == 0) return false; // 10 / 2 = 5
//   }
//   return true;
// }
// function checkAge(age) { return (age > 18) ? true : confirm('Did parents allow it?') };
// function checkAge(age) { return (age > 18) || confirm('Did parents allow it?'); }
// function min(a, b) { return (a < b) ? a : b; }
