// MDN Functions Assmts

  // Random Name App
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions#functions_1
  // DOM manipulation: createElement(), textContent, appendChild() or append()
  // Create a simple function, chosenName() that prints a random name from the provided array, names, to created 'para' element and run it once.
  const names = [
  'Sexy Mike',
  'Li\'l Kang',
  'Rosie Doggers',
  'Krista',
  'Liz',
  'Barney Doggers',
  'Gesh Doggers',
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
    // console.log(randomNum);
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

// Use curly braces, otherwise get unexpected results.
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

let primePara = document.createElement('p');
primePara.setAttribute('class', 'primes');
let article = document.querySelector('article');
// const div = document.getElementsByClassName('article-body-wrap');
// div.append('Some text', primePara);
function showPrimes(prime) { 
  for (let i = 2; i < prime; i++) {
    if (!isPrime(i)) continue;
    // article.append('Some text');
    console.log(i);
    }
}
showPrimes(12);
function isPrime(n) { // pass param 'n'  
  for (let i = 2; i < n; i++) { 
    if (n % i == 0) return false; // 10 / 2 = 5
  }
  return true;
  // return div.append('Some text', primePara);;
}

// function checkAge(age) { return (age > 18) ? true : confirm('Did parents allow it?') };
// function checkAge(age) { return (age > 18) || confirm('Did parents allow it?'); }
// function min(a, b) { return (a < b) ? a : b; }

// Arrow Functions
// https://javascript.info/arrow-functions-basics#summary 
// If the response 'confirmation' to question is yes, run yes() else run no()
// Invoke ask using ternary operator and arrow function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();   
// }
// ask('OK to confirm, otherwise Cancel.',
//   () => { alert('Thank you for your confirmation.'); },
//   () => { alert('Well, fuck you then!'); }
// );

// Wes: Arrow Functions - convert to arrow function
  // function inchesToCM(inches) {
  //   const cm = inches * 2.54;
  //   return cm; // 17.78
  // }
  // First convert to anon func:
  // const inchestoCM = function (inches) { return +inches * 2.54 };
  // Second, convert to arrow func
  // variable = (args) => expression;
  // const inchestoCM = inches => inches * 2.54; // implied return

  // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
    // Q: Does the function take a param? Yes, the 'event' on the keydown event.
    // The 'event' gets passed to the console.log string as a variable (interpolated).
    // To utilize the input element, save input element as var by getting element's ID.
    boxInput = document.getElementById('boxInput');
  // Define a function that logs the keyboard key a user presses after clicking on a specified input element.
  // function logKey(event) {
  //   console.log(`You pressed: ${event.key}`);
  // }
  // Bind 'keydown' event and 'logKey' function to input element via var (set above)
  // boxInput.addEventListener('keydown', logKey);
  // Instead of defining a separate function (like above) pass an anonymous function that logs the key a user presses after clicking in input element into the event listener method.
  // boxInput.addEventListener('keydown', function(event) {
  //   console.log(`${event.key}`); // .key returns the letter, .code returns a corresponding code representing the key pressed
  // });

// Arrow Functions
  // Instead of defining a separate logKey() function, pass an anonymous function into addEventListener using the => arrow function operator ('fat' arrow)
  // If the function only has one line in the curly brackets, you can omit the curly brackets.
  // If the function only takes one param, you can omit the parens around the param.
  // boxInput.addEventListener('keydown', event => console.log(`${event.key}`));
  // const keyOutput = document.getElementById('fizzbuzz');
  // boxInput.addEventListener('keydown', event => keyOutput.textContent = `You Pressed the  ${event.key} key.`);

// Function Scope
  // const z = 'Bitches be like... !';
  //   function a() {
  //     const x = 'Poop!';
  //     output(z);
  //     fizzbuzz.textContent = z;
  //   }
  //   a();
  //   function b() {
  //     const y = 'Pee!';
  //     output(z);
  //     fizzbuzz.textContent = z;
  //   }
  //   // b();
  //   function output() {
  //     fizzbuzz.textContent = z;
  //   }
  // output();

// Wes: Anonymous Functions, IIFE, Hoisting, Arrow Functions, Function Expression
  // function doctorize(firstName = 'caRPeNTer') {
  //   firstLetter = firstName[0].slice(0).toUpperCase();
  //   return `Hello, I'm Dr. ${firstLetter}${firstName.slice(1).toLowerCase()}`;
  // }
  // doctorize();

  // IIFE: Immediately Invoked Function Expression
  // Anon functions are not HOISTED (moving defined functions to top of file). Can't run anonymous function BEFORE initialization.
  // doctorize('fraNKenSTEin');
  // Set unnamed function as variable, then run variable as 

  // Function Expression - Functions as First Class Citizens
  const doctorize = function(firstName = "laMPe") {
      firstLetter = firstName[0].slice(0).toUpperCase();
    return `Hello, I'm Dr. ${firstLetter}${firstName.slice(1).toLowerCase()}`;
  }

// Wes: Arrow Functions - convert to arrow function
  // function inchesToCM(inches) {
  //   const cm = inches * 2.54;
  //   return cm;
  // }
  // Reduce function size by eliminating variable assignment
  // function inchesToCM(inches) {
  //   return inches * 2.54;
  // }
  // Convert to arrow function with one param and implicit return
  // const inchesToCM = inches => inches * 2.54;

  // Repeat but with two params
  // function addAB(a, b = 666) {
  //   const sum = a + b;
  //   return sum;
  // }
  // Convert to anon function first
  // const addAB = function(a, b = 666) {
  //   const sum = a + b;
  //   return sum;
  // }
  // Then convert to arrow function (consolidate return stmt keyword)
  // const addAB = (a, b = 666) => {
  //   return sum = a + b;
  // }
  // Reduce further by removing function block and return keyword
  // const addAB = (a, b = 666) => a + b;

  // Returning an object (Make A Baby Lol)

  // IIFE Immediately Invoked Function Expression (parens always run first)

  // Methods (like console.log())

  // Callback functions:  'onclick' callback (like addEventListener)
    // callback function: a function that gets passed into another function and then is called by the browser at another time like setTimeout()?.

//https://javascript.info/arrow-functions-basics#tasks
  // function ask(question, yes, no) {
  //   // if user clicks 'Okay' on confirmation msg
  //   if (confirm(question)) yes();
  //   else no();
  // }
  // // ask('Click to confirm',
  // //   function() { alert('Yeah, yeah whatevers.'); },
  // //   function() { alert('NO, you son-of-a-bitch!'); }
  // // );
  // // The above function converted to arrow function.
  // ask('Click to confirm',
  //   () => { alert('Yeah, yeah whatevers.'); },
  //   () => { alert('NO, you son-of-a-bitch!'); }
  // );
  // window.onload = () => confirm("Do you agree?") ? alert("You agreed.") : alert("You canceled the execution.");

  // And convert to arrow function
  // function capitalize( capitalized = "lESteR") {
  //   return `${capitalized[0].toUpperCase()}${capitalized.slice(1).toLowerCase()}`;
  // }
  // const capitalize = (capitalized = 'lESteR') => `${capitalized[0].toUpperCase()}${capitalized.slice(1).toLowerCase()}`;
  // const lastLetter = (usrString = 'Default user string') => `${usrString.slice(-1)}`;

  // Don't recall where this came from.
// function howMany(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//   alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
// });
// function getRandomArbitrary(min, max) {
//   console.log('max: ', max);
//   console.log('min: ', min);
//   return Math.random() * (max - min) + min;
// }
// // console.log('Random Artibrary rounded up: ', Math.ceil(getRandomArbitrary(0, 100))); // 10mil
// const min = Math.random();
// // console.log(min);

// const array = new Uint32Array(10);
//   self.crypto.getRandomValues(array);

//   console.log("Your lucky numbers:");
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
    // < div >
    // <input id="boxInput" type="text" value="Click Here" name="input-name">
    //   <form name="selectForm">
    //     <p>
    //       <label for="musicTypes">Choose some music types, then click the button below:</label>
    //       <select id="musicTypes" name="musicTypes" multiple="multiple">
    //         <option selected="selected">R&B</option>
    //         <option>Jazz</option>
    //         <option>Blues</option>
    //         <option>New Age</option>
    //         <option>Classical</option>
    //         <option>Opera</option>
    //       </select>
    //     </p>
    //     <p><input id="btn" type="button" value="How many are selected?" /></p>
    //     <p>This example calls a function which interrupts the loop using return statement</p>
    //   </form>
    // </div>



