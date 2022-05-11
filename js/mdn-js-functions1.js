/************************* MDN Functions Assmts | The Random Name App ********************* 

  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions#functions_1
  
  DOM manipulation: createElement(), textContent, appendChild(), querySelector(), insertAdjacentElement

  Create a simple function, chosenName(), that prints a random name from the provided array, names, to created 'para' element and run it once.
*/
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
  const h2 = document.querySelector('h2');
  const para = document.createElement('p');
  para.setAttribute('class', 'func1Assmt');
  h2.insertAdjacentElement('afterend', para);
  const namesLength = names.length;
  const randomNum = parseInt(Math.random() * (namesLength));
  return para.textContent = names[randomNum];
  }
chooseName();

/************************* Params, Args and defaults ********************* 
  1)  Passing undefined arguments
  Append a created div with a height and width of 100px and perhaps a background and/or border color and app.
  
  Omitted args cause warning, but appears to run? 
  createDiv(); // Don't pass args in order to use default params.
  createDiv('100px', undefined, 'linen', undefined); // mixed args and params
*/ 
function createDiv(
  height = '200px',
  width = '100%',
  bgColor = 'yellow',
  border = 'solid 1px black',
  margin = '10px 0'
) {
  const boxDiv = document.createElement('div');
  boxDiv.setAttribute('class', 'boxDivStyle');
  const p = document.querySelector('.js-functions-1-args');
  p.setAttribute('class', 'js-functions-1-p')
  p.insertAdjacentElement('afterend', boxDiv);

  // Add the default params styles
  boxDiv.style.height = height;
  boxDiv.style.backgroundColor = bgColor;
  boxDiv.style.border = border;
  boxDiv.style.width = width;
  boxDiv.style.margin = margin;
}
// mixed args and params and even missing last param but still runs.
createDiv('50px', undefined, undefined, border = 'dotted 5px magenta');

/************************* 2) Evaluating default params ********************
  Example 2) https://www.javascripttutorial.net/es6/javascript-default-parameters/

  "JavaScript engine evaluates the default arguments at the time you call the function."
    It's like there's no memory functionality--JS overwrites at ea new call. 
    So the pushed item doesn't remain in the array. Ok.
    The array gets overwritten each time a new item is added.
    If I assign the array outside the function, it adds ea new item to the array w/out deleting prev items.

    There's something about WHEN default args are evaluated that affects the outcome, results, I guess?
      WHEN meaning whether they're assigned in a calling function or in global scope, I'm guessing.
*/
// overwrites the array when assigned as default
const toyBox = [];
function put(toy) { // adds new items bc array is assigned in global scope
  // function put(toy, toyBox = []) { // overwrites 'toy' w each new call 
  toyBox.push(toy);
  console.log('toyBox array contents: ', toyBox)
  return toyBox;
}
// put('Matchbox car');
// put('Etch-a-sketch');

// today() function is param of date2() function
function date2(d = today()) {
  console.log(d);
}
function today() {
  return (new Date()).toLocaleDateString("en-US");
}
// date2();

// Demonstrates required args and error.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function requiredArgs() {
  throw new Error('Both args are required.'); // not official error, I don't think. 
}
function add(x = requiredArgs, y = requiredArgs) {
  console.log(x + y); 
  return result = x + y;
  // console.log(result);
  // return result;
}
// add(10); // Error sorta works, but illustrates the point nonethless.
// add(20, 10)

/************************* 3) Using other params in deault values ********************
  Example 3) https://www.javascripttutorial.net/es6/javascript-default-parameters/

  Can assign a parameter a default value that references other default params. 
  Got it... easy enough.
  function add(x = 1, y = x, z = x + y) { // Works by assigning x first then setting y to x.
    // function add(y = x, x = 1, z = x + y) { // Error: can't set y to x before assignin? 
    return x + y + z;
  }
  // console.log(add()); // 4
*/

/************************* Return value of function as a default value ********************
  https://www.javascripttutorial.net/es6/javascript-default-parameters/

  Got it... easy enough.
  // const taxRate = () => 0.1;
  // const taxRate = prompt('Enter the tax rate, e.g., NYCity: ', localTax = .0875)
  function calcTax(price, tax = price * localTax) {
    const total = price + tax;
    console.log(total)
  }
  calcTax(100);
*/

/************************* The Arguments Object *************************
  https://www.javascripttutorial.net/es6/javascript-default-parameters/
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  
  An array-like object to access a function's args w entries for each arg it was called with.
    Index-based
    If writing ES6, use rest parameters: (from TDD exercises) infinite number of args as array.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

    Pass 3 params into a function that adds and returns their sum.
    Using the arguments object, get the length of the passed args in the called function.
    // function addMachine(x, y = 1, z = 2) {
      function addMachine(x, y = 10, z = x + y) {
        console.log('Number of args: ', arguments.length);
        console.log('Total sum: ', x + y + z);
      }
      addMachine(50, 20, 50) // args override params 
*/

/************************* Squared Nums, Factorial Nums, Cubed Nums ********************* 
  This is fine but it doesn't specifically apply to functions except that I could implement one.
  A squared number is the result of a number multiplied by itself, e.g., 4 * 4, 3 * 3, 2 * 2 ... 
  
    There is also
      'Factorial Nums' lists factors of nums like 1 * 1, 1 * 2, 1 * 3, etc.
      'Square root' 
      'Cubed'
      and the DREADED 'Prime Numbers' Lol
*/

/************************* Prettified Name App ************************* 
  Fix the capitalization in a string and output correctly to browser/console:
    'lESteR', 'chRisTOPhER', 'tOM'
  Make it dynamic so the string is always capitalized regardless of its length.

  .value is a property of the HTMLElement Web API DOM interface

  define function capName
  pass 'name' param into function
  set name to all lowercase
  access the first character of name and set it to uppercase
  return name  

  Make an algorithm that takes an input, name, and properly capitalizes it in the browser.
  Display the name after it's been prettified.

    input for user to type 'ugly' name (mix upper/lowercase ltrs)
    capture input element value on submit button click
      'click' event runs capName function
      save capNameOutput var as value of the input element in variable
      save nameLength var as capNameOutput.length
      return capNameOutput all lowercase with the first letter capitalized.

    Got stuck on how to get result to the DOM.
    Looked up 'append' since I thought I could just append but that threw error.
    Which made me look at how I'm getting the input element's value and using .textContent.
    I followed the line of how I was getting the value from the input element and realized I could reassign the textContent to the template literal that fixes the capitalizations.
    Trying to refactor failed.
*/
// Selectors
const capNameBtn = document.querySelector('#capNameBtn');
const capNameh2 = document.querySelector('.capNameTitle');
const capNameOutput = document.createElement('p');
capNameOutput.setAttribute('class', 'capNameOutput')
capNameh2.insertAdjacentElement('afterend', capNameOutput);

capNameBtn.addEventListener('click', capName); 
function capName() {
  const capNameInput = document.getElementById('capName').value; // input element (user) value
  capNameOutput.textContent = capNameInput;
  namesLen = capNameOutput.textContent.length;
  capNameOutput.textContent = `${capNameOutput.textContent.slice(0, 1).toUpperCase()}${capNameOutput.textContent.toLowerCase().slice(namesLen - (namesLen - 1))}`;
}


