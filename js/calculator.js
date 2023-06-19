const display = document.querySelector('.calc-display-wrap'); // console.log(display)
const para = document.createElement('p');
// display.append(para); // .setAttribute('class', 'poop');
// const display = document.getElementsByClassName('display'); console.log(typeof Array.from(display));
display.setAttribute('style', 'border:solid 1px #7f7f7f; height:2em; text-align:center;');
// const key = document.querySelector('.key'); console.log(key); // works

function printToDisplay(e) {
  // console.log(e.target.tagName, Array.from(e.target.classList).includes('display'));
  // console.log('e', e.key, typeof e.key, e.currentTarget, e.target.tagName); // .key is the value, target is element?
  // question is how to target the child of display-wrap
  const str = e.key;
  const code = e.code.charAt(0); // Numpad1, Numpad0, etc
  // console.log(typeof key, key, e.key, typeof str, e.type); // string, key value '1', '2', etc. 
  // console.log(e.code, str); // typeof object typeof e, e, 
  if (code === 'N') display.textContent += str; // prints number to the display
  if (e.key === 'Enter' || e.key === '=') display.textContent = calc.add(a, b); // works, but needs (a, b) vars
  // if (key === 'Clear') display.textContent = str; // nope
  // const key = document.querySelector(`div[data-key="${e.key}"]`);
};
// window.addEventListener('keydown', printToDisplay); // document or window works

function Calculator(a, b, operator, element) {
  this.a = 0;
  this.b = 0;
  this.operator = ['+', '-', '*', '/'];
  
  this.add = function (a, b) { return a += b; };
  
  // Display receives click/keypress value & shows on screen
  // Also builds equation string for operations stack
  // https://stackoverflow.com/questions/12731528/adding-event-listeners-in-constructor 
  // https://www.section.io/engineering-education/keyboard-events-in-javascript/#handling-keyboard-events-in-javascript
  const display = document.querySelector('.calc-display-wrap'); // console.log(display)
  display.textContent = 'poop';
  // this.element = document.querySelector('.calc-display-wrap');
  const self = this;
  this.bar = function (event, element) { 
    // console.log(event);
    // return event; // no need to return event?
  };
  window.addEventListener('keypress', // keydown
    function (event, element) {
      display.textContent += `${event.key}`;
      // console.log(display); // this.element is undefined,
      // console.log(event.clientY, event.clientX); // event
      // event.preventDefault();
      // self.bar(event.clientX); // seems to do nothing
    }
  );
};
const calc = new Calculator('.calc-display-wrap');
// calc; // bar() isn't doing anything here

//   // Display receives click/keypress value & shows on screen
//   // Also builds equation string for operations stack
//   // https://stackoverflow.com/questions/12731528/adding-event-listeners-in-constructor 
//   this.element = document.querySelector('.calc-display-wrap');
//   const self = this;
//   this.bar = function (event, element) { 
//     // console.log(event);
//     // return event; // no need ot return event?
//   };  
//   this.element.addEventListener('click', // keydown
//     function (event, element) {
//     console.log(this.element); // undefined
//     // self.bar(event.clientX);
//     console.log(event.clientY, event.clientX); // event
//     event.preventDefault();
//     });
// };
// const calc = new Calculator('.calc-display-wrap');
// calc.bar(display);


// const calc = new Calculator();
// console.log(calc.add(21, 34)); // 55
// console.log(calc.operator.includes('*')); // true
// console.log(calc.operator.filter(o => o === '*').join()); // string
// console.log(calc.operator.find(e => e === '/')); // works

// Could I do this using reduce() on a pipe array?
const add = (a, b) => a += b; 
const subtract = (a, b) => a -= b;
const multiply = (a, b) => a *= b;
const divide = (a, b) => a /= b;
function operate(operator, num1, num2) { // still needs the operators
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtract(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
  return operator;
  // takes an operator and 2 nums
  //  then calls one of the above functions on the nums.
};
// console.log(operate('+', 6, 4));
// console.log(operate('-', 6, 1));
// console.log(operate('*', 3, 4));
// console.log(operate('/', 3, 4));

let userInput = '1+2';
const getUserInput = function (str) {
  return str.split('');
};
// console.log(getUserInput(userInput));

/*
  https://dev.to/parenttobias/pre-planning-your-project-4fd5

  Three original tenents of Object Oriented programming:
    Encapsulation
    Communication
    Late Instantiation
  SEPARATE PARTS that COMMUNICATE but don't interfer w ea other.
  Reusable (like a general template).

  Developers think in patterns.
  Stay aware of the big picture — parts that make the 'whole'
    and how they interact.
  Be aware of the moving parts.
  Consideration of data the project manipulates (the state).

  Calculator components: 
  * Display - shows operators, operands, and their product. 
  * Keypad - screen to click at first, then keyboard functionality.
  * Container/Manager - Operations Stack (holds components, state/data).

  The data is user input as well as the product of the input (the arithmetic).
    Integers and operators, backspace (delete), clear — mouse clicks/keyboard input.
    The product is what ea function returns. 
    'keypress' and 'mouseclick'
    0-9, clear, delete, - + / *, enter/=

  See article for list of components.

  The Display Interface
  * Update(string) 
    Communicate w display using the Event Web API interface,
    'click' and 'keypress' of user input.
    display and update the given string(s)
  * reset() - clear the entire display
  * Display shows user clicked/pressed key 'value' and the 
    product of user-entered expressions.
    Need a process to get that value. 

  The Keypad - Communication
  * A grid of divs or other semantic markup.
    Hardcode ea key value in data-set or other attribute?
      Don't think it's necess but can include, delete later.
    Renders like a keypad--keys w corresponding number or operator.
  * The event listener will hook into it (communication).
    Get which key is pressed and it's value (.key?)
    Event delegation?
    'clickable' to start, then add keyboard support.
  * Passes a 'click' notification. (Emits?)
  
  The Container (Object?) a.k.a The Manager 
  * Container Interface
    Keypad events:
      update Operations stack as needed (user input)
      notify Display.
  * Operations Stack
    - A container for Display and Keypad sibling components.
      Ea component works on its own w/out requiring the other, but
        allows communication between them.
    - Container manages Keypad, Display components: facilitates communications.
    - Owns, manages the 'state' (data) which is passed btwn Display & Keypad.
  How does Container handle internal communications?
    By calling functions and/or setting vars (independently or by calling 
      functions that return them) inside the container's scope so other components
      (keypad, display) have access to them.

  Execution Notes
  Haven't played w the DOM stuff lately and need to brush up.
  Specifically, getting value of 'keypress' event: .key, I think.
    Display:
      - Builds string of user inputs, e.g.: '1 + 2 =', to render onscreen. 
      - Communicates w Keypad: stores event keypress input values as (a, b)
      - Returns product of 'computational' functions while also saving vars for the add(a, b) function.

  Conditionals:
  If equal or enter key is pressed, return product of num1 & num2
    if only num1 is entered for any operator, return (num1 operator num1) (1 + 1).
  
  Display Component Execution
  Event Delegation:
    Get reference to the display wrapper <div> which contains 2 <p> tags (upper, lower display).
    Define a 'click' 'keypress' event on wrapper and pass callback function which passes the event.
    Ways to create vars for 'num1' 'operator' and 'num2':
      build a string using concatenation, then split into an array.
      slice() a concatenated string at an ADDED 'space' character.
      Add string to array when operator key is pressed.
      Could use conditionals for whether input is a num or operator
*/


// Event Delegation
// https://blog.whatthecode.academy/event-delegation-capturing-and-bubbling#phases-of-an-event
const rootDiv = document.querySelector('#root');
// console.log('rootDiv', rootDiv)
// console.log(rootDiv.children); // HTMLCollection of elements and their classes
// console.log(rootDiv.id); // root
// console.log(rootDiv.classList); // also root
const rootChildNodes = rootDiv.children;
// console.log(rootChildNodes);
// console.log(rootChildNodes[0]);
// console.log('is rootDiv an array?', Array.isArray(rootDiv)); // false
function getName(event) {
  // classList returns DOMTokenList which can be made into an array and looped over
  // console.log('classList array', Array.from(event.target.classList), event.target.classList); // 
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
  if(Array.from(event.target.classList).includes('avenger') && event.target.tagName === "P") {
    console.log(event.target, event.target.textContent, event); // target is paragraph element
  };
};
rootDiv.addEventListener('click', getName);

// const elEye = document.querySelectorAll('li'); // NodeList
const elEye = document.getElementsByTagName('li'); // HTMLCollection
// console.log(Array.from(elEye).reduce(()));
// const something = [...elEye].forEach(e => console.log(e))


// dataset selectors - I don't remember where I found this. 
// But see my codepen on dataset selectors.
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class*="funnel-"]`)]; // array
// const refs = document.querySelectorAll(`[class*="funnel-"]`); // NodeList
// console.log('refs is a', refs)
// refs.forEach(e => console.log(e.textContent));
// refs[0].textContent = 'Poop';
// // NodeList is 'array-like' but can't use higher order methods like reduce or splice.
// console.log(Array.isArray(refs)); // true
// const whatevs2 = document.querySelectorAll('p')
// console.log(whatevs2)
