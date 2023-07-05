/* Notes on https://dev.to/parenttobias/pre-planning-your-project-4fd5

  Three original tenents of Object Oriented programming:
    Encapsulation
    Communication
    Late Instantiation
  SEPARATE PARTS that COMMUNICATE but don't interfere w ea other.
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
    'keydown' and 'mouseclick'
    0-9, clear, delete/backspace, - + / *, enter/=

  See article for list of components.

  The Display Interface
  * Update(string) 
    Keypad communicates w display using the Event Web API interface,
    'click' and 'keydown' of user input.
    Display and update the given string(s)
  * reset() - clear the entire display
  * Display shows:
      user clicked/pressed key 'values' - integers and operator
      product of expression based on user input.
    Need a process to get that value. 

  The Keypad - Communication
  * A grid of divs or other semantic markup:
    Hardcode ea key value in data-set or other attribute?
      Don't think it's necess but can include, delete later.
    Renders on screen like a standard keypad:
      button-like keys labelled w corresponding number or operator.
  * Bind event listener for 'keydown' and 'click' (communication).
    Get which key is pressed and it's value (.key) - event delegation?
    'click' and 'keydown'.
      Two listeners? I've never done this before.
  * Receives a 'click' or 'keydown' notification and a value. 
  
  The Container (Object?) a.k.a The Manager 
  * Container Interface
    Keypad events:
      update Operations stack as needed (the 'operate' functions?)
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
      (keypad, display) have access to them?
*/
/* Execution Notes

  Operations:
    - Store product of operate() (basic math) functions (?).
    - Format userInput for operate() use (separate fn?).
    - Create/store current version of data for passing btwn Display and Keypad components.
    - Bind listener events 'keydown', 'click' (very end of component).
    - operate() details ... 

  Display:
  Contains function(s) that define calls in keypad().
    - Receives updated string from keypad() (click/keydown) for ea single click/keydown.
    - Prints event keypad() value to screen.
        Might need to use append(), appendChild() (not text.Content) or both, 
        potentially causing some refactoring.
    - reset() empties values/vars AND clears screen. 
    - clear() wipes the display clean but keeps var values (not sure I can do this).
    - backspace() deletes the last typed/clicked char

  Keypad Execution:
  I still haven't tried pushing to an array to build userInput.
    Update/pass concatenated string var(s) for Operations and Display components, e.g., '123 + 2'.
      Might not be concatenated string... still haven't tried pushing to array.
      * Call display() for screen update of variables (see clear() example below)
      Spaces/no spaces btwn operands is an issue: add a space before and after operator.
      Or I could slice it like the JS.info calculator constructor did.
      I suppose I could hardcode a data- thing but that seems overkill and there's a simpler solution.
    Conditionals for keys. A bunch of if stmts or switchs? Use a loop?
      How can I best solve for all the scenarios needed for e.code (keypad keys):
        Numpad0-9 Decimal get concatenated together to build the string operands
        NumpadAdd Subtract Multiply Divide get an extra space before/after, added to string (Display)
          Secondarily, these run expression/return result/product if... (add condition)
        NumpadEqual Enter runs expression/returns result/product
        NumpadLock Clear clears Display and empties userInput string

    Event Delegation:
      Get reference to the display wrapper <div> containing 1 <p> tag
      Create string vars for 'num1' 'operator' and 'num2' (not sure exact scope atp)
      Define a 'click', 'keydown' event on wrapper, pass callback function to access event.key value.
      Concat ea event.key value and save to string vars.
*/

// Calculator
function calculator() {
  
  let input = '';
  let expression;
  
  function operate() {
    // Arithmetic Operator Detection:
    // destructure [num1, operator, num2].filter the operator and slice/splice to reduce
    expression = input.split('-').reduce((num1, num2) => num1 -= num2);
    console.log(expression);
    // expression = input.split(' ').reduce((num1, num2) => num1 -= num2);
  };
  
  // Display
  function display() {
    function clear() {
      // clear() and reset() should prolly be diff fns.
      // Might need to use append(), appendChild() causing some refactoring.
      screen.textContent = '0';
      input = '';
    };
    clear();
  };

  // Keypad
  const screen = document.querySelector('.calc-screen-wrap'); // console.log(screen)
  const para = document.createElement('p');
  // screen.append(para); // .setAttribute('class', 'poop');
  screen.setAttribute('style', 'border:solid 1px #7f7f7f; height:2em; text-align:center;');

  // Destructuring - make array and also get access to ea indiv variable.
  // https://stackoverflow.com/questions/45090565/javascript-include-a-check-to-see-if-multiple-elements-are-in-an-array

  // const operatorIndex = userInput.indexOf('-'); // console.log(operatorIndex); // 6
  // const operator = userInput.charAt(operatorIndex); // console.log(operator)
  // const num1 = userInput.slice(0, operatorIndex); // console.log('num1:', num1, typeof num1); // 100023 string
  // const b = userInput.slice()
  // console.log(userInput.indexOf('+'), index, a);

  function getUserInput(e) {
    // https://stackoverflow.com/questions/96428/how-do-i-split-a-string-breaking-at-a-particular-character
    // overflow: hidden; https://stackoverflow.com/questions/1165497/how-to-prevent-text-from-overflowing-in-css
    // console.log(e.target.tagName, Array.from(e.target.classList).includes('screen'));
    // console.log('e', e.key, typeof e.key, e.currentTarget, e.target.tagName); // .key is the value, target is element?
    // question is how to target the child of screen-wrap
    const str = e.key;
    const code = +e.code.charAt(e.code.length - 1); // Numpad1 thru Numpad0
    // console.log(typeof key, key, e.key, typeof str, e.type); // string, key value '1', '2', etc.
    // console.log(e.code, str); // typeof object typeof e, e, 
    if (e.key === 'Clear') {
      display();
    };
    // console.log(str.split()); // string to array

    // screen: prints number to the screen
    // if (code === 'N' && e.key !== 'Clear') {
    if (e.key !== 'Clear' && !isNaN(code)) {
      console.log('code', code);
      screen.textContent += str; // Pass var to screen Component?
      input += str; // Adds operator to string twice
    };
    if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') {
      input += ` ${e.key} `; // works
    };
    console.log(input);
    if (e.key === 'Enter' || e.key === '=') {
      operate();
    }
    // For Operations Component
    // screen.textContent; // = calc.add(a, b); // works, but needs (a, b) vars
  };
  document.addEventListener('keydown', getUserInput); // document or window works
};
calculator();

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


/********** Noodling **********/
/* Analyzing how to split() userInput data
  const userInput2 = '123-2';
  const [num1, num2] = userInput2.split('-'); // ['123', '2']
  // console.log(num1, num2); // '123' '2'
  const result = [num1, num2].reduce((acc, currVal) => acc -= currVal); // 121 console.log(result)

  const userInput = '123 - 2'; // use char space
  // const [num1, op, num2] = userInput.split(' ') // ['123', '-', '2'] use char space 
  // const newNum1 = +num1 + 1; // 124 console.log(op) '-'
  // // console.log(num2); // 2
  // const result = [num1, op, num2].reduce((acc, currVal, i, a) => {
  //   console.log(a[1]);
  //   a.slice(a[1])
  //   return acc - currVal;
  // });
  // console.log('result', result)
*/


// Constructor version
function Calculator(a, b) {
  // Ultimately operator, operand vars come from userInput.
  // this.userOperator = '/'; // keypad component
  this.a = a;
  this.b = b;
  this.operator = ['+', '-', '/', '*'].filter(e => e === this.userOperator);
  // console.log('operands', this.a, this.b, this.operator); // works

  this.operate = function () {
    const o = this.operator.filter(o => o === this.userOperator); // .join('')
    // const total = this.a / this.b; // console.log('total', total);
    // console.log(6 * 2)
    // console.log(this.a, o, this.b);
    return 'poop';
    return `${this.a} ${o} ${this.b}`; // string nope
    return this.a; // undefined?
    return 6 * 2;
    return total;
    return `${this.a}`; //  `${o}` `${this.b}`; // strings nope
    return total;
  };
};
// Will operands will need to be passed to new instance?
// I'm thinking, no. The event listener takes care of that.
const calc = new Calculator(8, 9);
// calc.operate(2, 3);
// console.log(calc.a, calc.b, calc.operate(), calc.operator);
  // I'm not sure if a single function for ea of the operands is what I want.
  // But it feels weird to have 4 different function for ea one.


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

