/*
  Getting loopy with built-in array methods (filter, map).
  for, while, do.. while, for.. of, forEach loops.
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
/*
  myMap() based on Briggs' https://briggs.dev/blog/understanding-callbacks

  @param  callBack      function
  @param  array         array

  @var  newArray        array
  @var  callBackResult  array
        (where results of looped array items are stored)

  @returns  newArray

  Pseudo-code:
  Run a for loop on @param array.
    Loop through array and store result (hint: ea item) in callBackResult.
    Add each item of the callBackResult to newArray.
  Return newArray

  Call myMap() w a function expression in arrow function syntax passing @param array and @param callBack.
  callBack method is provided when calling myMap() 
*/
function myMap(arr, callBack) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const callBackResult = callBack(arr[i]); // work w callBack function, passing in array item for ea iteration
    newArray.push(callBackResult);
  }
  return newArray;
}
// DOM Selectors
const h2 = document.querySelector('.post-title');
const namesPara = document.createElement('p');
h2.insertAdjacentElement('afterend', namesPara);

const printNames = myMap(names, (toUpperCase) => { // wrap callback in parens
  namesPara.textContent = names.join(', ').toUpperCase();
  return names.join(', '); // would you ever return? 
});
// console.log(names); // original array
// console.log(printNames) // prints a complete array for each item in it (9 in this case)

const addTwo = myMap([2, 9, 3], (plusTwo) => { // wrap callback in parens
  // console.log(plusTwo + 2);
});

/*
  filter()

  Use filter() to filter an array by first letter using a function expression as well as a callback function.
  console.log results and append results to DOM.

  Pseudo-code for callback function example:
  function name(name) 
  return array.startsWith('letter');
  assign filteredName = array.filter(name)
*/
 // Callback function example
  function filterFirstLtr(arr) {
    // console.log(arr.startsWith('S'));
    return arr.startsWith('S');
  }
  const filterNames = names.filter(filterFirstLtr);
  // console.log(filterNames);

// Selectors
const h3Filter = document.querySelector('.filter');
const filteredPara = document.createElement('p');
h3Filter.insertAdjacentElement('afterend', filteredPara);

// Function expression example
let filteredNames = names.filter((el) => el.toLowerCase().startsWith('l'));
filteredNames = filteredNames.join(' * ');
filteredNames.textContent = filteredPara.append(filteredNames);

// namesPara.textContent = filteredNames.join(' * ');
// console.log('filteredNames array: ', filteredNames.join(' * '));  

/*
filter()
Filter array content based on search criteria.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#searching_in_array

pseudo-code:
  I want a function that returns a filtered array 
  of a query run on each element of the array
  that returns all queried items that contain a specified string 

  @param  arr     array
  @param  query   method/function

  @return filtered array
*/
function filterArr(arr, query) {
  // How to access ea element to test a query? By passing 'el' in anon function
  return arr.filter(function (el) {

    // indexOf() returns the first index
    // return el.toLowerCase().indexOf(query.toLowerCase()) !== -1; // not, not in array = true - it's in array.

    // startsWith() returns T/F
    // return el.toLowerCase().startsWith(query.toLowerCase()); // not, not in array = true - it's in array.
    
    // includes() returns T/F
    return el.toLowerCase().includes(query.toLowerCase());
  });
}
// console.log('filterArr: ', filterArr(names, 'gg'));

/*
  Exiting loops with break.
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break

  Search through an array of contacts and telephone numbers
  and return just the number searched for.
  If there's no match, display 'Contact not found.' 

  Start w just logging the search results.

  @var searchTerm     string
  @var splitContacts  array

  Output to console, then to a paragraph via text input when code is working.

  Pseudo-code:
  3 resets:
    clear input, re-focus input, clear searchTerm
  function displayContact()
  In the loop,
    split the contacts array by separator ':' and save as splitContacts
    loop through splitContacts
    if searchTerm matches the first element of the splitContacts array,
      then log the contact name and number,
      otherwise break; // pretty sure not continue since there's no other code/loop
    if no matches are found
      then log/output 'Contact not found'.

  * Added after starting:
    I forgot how/to include getting the value from the input.

  Problems:
  1.  trouble splitting contacts into individual arrays of name/number pairs.
      I remember it being done in the loop, but not exactly how. 
      no error using .forEach, but splitContacts logs 'undefined'
      splitting each contact in loop creates what I want but it's a string not array
      searching: does split go inside conditional? Yes, but....
    Solution: 
    Searched around and found this 
      https://stackoverflow.com/questions/23440740/loop-through-array-using-split-to-separate-items-by-commas
      which helped remind me how to use bracket notation and access items 
    split() is a string method and therefore doesn't work on arrays.
    So, the problem becomes when to call split()... when in the loop are contacts a string?
    Bracket notation provides access to each array item in the loop,
      so I logged 'typeof contacts[i]' which is 'string'. 
    Boom!
    Here is where I can split contacts into idividual arrays and save as 'splitContacts'. 

  2.  I forget how to use input to use in search.
      There's .value, I remember.
      Ah! So searchTerm is the textInput.value? So it seems, yes.
      But I also remember it was one of the 3 resets.

  Weds 4/6 9:42am:
    To do:
    1.  Ensure input is case insensitive.
        done @9:53am
      solution:
        Access stringified contacts in loop where array is split.
        IOWs concatenation with split() statement.

    2.  DOM manipulation: return results to 'outputPara' 
        start 9:57am
        Problem: results return all lower case. Bummer. 
        done @10:15
      temp work-around: 
        Returning name result in all caps for now. 
    
    3.  Fix 'Contact not found.' persisting in all conditions.
        stopped @10:45
        No solution found. Switching back to 'for' loop.  

    4.  Restarting w using for loop
        start @12:10
        @12:30 - for loop working. Problem #3 persists.
        @1pm - fixed #3.
*/
const contacts = [
  'Wemps:6028675309',
  'Olivia:3472663899',
  'Hannah:7183202230',
  'Jen:9170023223',
  'Krista:7974950592'
];
// Selectors 
const textInput = document.querySelector('#search');
const btn = document.querySelector('#btn');
const outputPara = document.createElement('p');
btn.insertAdjacentElement('afterend', outputPara);

btn.addEventListener('click', displayContact);

function displayContact() {
  const searchTerm = textInput.value;
  
  for (let i = 0; i < contacts.length; i++) {
    // resets
    textInput.value = '';
    // textInput.focus();
    
    const splitContacts = contacts[i].split(':');
    
    // toLowerCase() in loop only doesn't affect output.
    if (splitContacts[0].toLowerCase() === searchTerm.toLowerCase()) {
      outputPara.textContent = `${splitContacts[0]} at ${splitContacts[1]}`;
      break;
    } else {
      outputPara.textContent = `Contact '${searchTerm}' not found.`;
    }
  }
  if (searchTerm === '') outputPara.textContent = 'Enter contact name'; 
}
displayContact();

/*
  Display Square Numbers Task
  Log/output to browser a list of square numbers from 1 to a max number (user input).
  For example, if the range is 1-10 the output/log is: 1, 4, 9. 

  Might be good idea to code later when solutions aren't so easily remembered
  from recently looking at it.

  Define 'square number':
  A number that is the product of a whole num (no floats) times ITSELF.
  The result of multiplying an integer (not a fraction) by ITSELF.
  Ex.:
  2 * 2 = 4 (square)
  the square root of 4 is 2
  Checking whether a num is a square, compare whether it's square root equals itself when rounded down.
  Is the square root of a number the same as that result rounded down, for example, with Math.floor()?
  Ex.:
  The square root of 5 is 2.23606797749979 (which isn't an integer; it's a float.)
    Rounded down using Math.floor() this become 2.
    Since 2 !== 2.23606797749979, it's not a square number.
*/

/*
* Refactored w text string.
* If counter (i) is at end of array: log the last item.
* Otherwise, keep looping through array.
* Interesting how the string is built.
* 
* Try refactoring w arrow function and ternary operator.
*/
// console.log(friends.join(' * '));
// let friendsText = 'My lovely friends are ';
// let i = 0;
// do {
//   if (i === friends.length - 1) { // if loop is at the end of the array... 
//     friendsText += `and ${friends[i]}.`; // add the last item w a period.
//   } else {
//     friendsText += `${friends[i]}, `; // otherwise, keep adding items.
//   }
//   i++;
//   }
// while (i < friends.length);
  // console.log(friendsText)

/*
  MDN Countdown Launch Active Learning
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown

  @var  para  object from createElement

  Count down from 10, replacing number 10 with the text 'Countdown 10'
  and outputting to the browser each successive number in it's own paragraph,
  replacing 1 with the text 'Blast Off!'

  Pseudo-code:
  Set selector para. 
  While the counter is less than 10,
  output each counter (i) to a new paragraph.
  if (i equals 10)
    replace 10 with 'Countdown 10' 
    else if (i equals 1)
      replace 1 with 'Blast Off!'

  I have the paragraphs, but am having trouble getting i to print to browser.
  Task took 1.5hours - don't usually use while stmts which is why I wanted to practice.
 */
let i = 10;
while (i >= 1) {
  let countdownPara = document.createElement('p');
  const countdownDiv = document.querySelector('.countdown-output');
  countdownDiv.appendChild(countdownPara);
  
  countdownPara.textContent = i;

  if (i === 10) countdownPara.textContent = 'Countdown 10';
  if (i === 1) countdownPara.textContent = 'Blast Off!';

  --i;
}

/*
  MDN Task: Filling in a Guest List
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list

  See link for description of algorithm.

  Pseudo-code:
  Initialize selectors/variables:
    @var  vipPara       object  HTML paragraph selector for loop results.
    @var  riffraffPara  object  HTML paragraph selector for loop results.

  Loop through guests array
    set counter to 0; loop through the end of the array (length); increment counter until the end.
    inside loop:
      use conditional to check whether the array contains the element 'Ross' or 'Emily'.
      if so, save them to the 'riffraffPara' object and set that object to that node's text content (hint hint ;-).
      if not, save to the 'vipPara' object and set that object to that node's text content.

*/
const vipPara = document.querySelector('.vip');
const riffraffPara = document.querySelector('.riffraff');
vipPara.textContent = 'VIPs: ';
riffraffPara.textContent = 'Riffraff: ';
const guests = [
  'Chris', 'Anne', 'Colin', 'Terri', 'Ross', 'Emily', 'Sam', 'Kay', 'Bruce'
];
guests.forEach((guest, index, array) => {
  // There has to be a better way to remove trailing comma and replace with period.
  // Would alt be to save as a string and slice() off and replace trailing comma w period?
  // I think just about any other solution would be at least as much code if not more, probably.
  if (guest === 'Ross') {
    riffraffPara.textContent += `${guest}, `;
  } else if (guest === 'Emily') {
    riffraffPara.textContent += `${guest}.`;
  }
  // Couldn't figure out how to get last comma off this object. 
  // if (guest === 'Ross' || guest === 'Emily') riffraffPara.textContent += `${guest}, `; 

  // This slices the comma off at least, lol.
  // const comma = riffraffPara.textContent.slice(-2);
  // riffraffPara.textContent = comma;
  // So I should slice everything BUT the comma and return that?

  vipPara.textContent += (index === array.length - 1) ? ` and ${guest}.` : `${guest}, `;
});






