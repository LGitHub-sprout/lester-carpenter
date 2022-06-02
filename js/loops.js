/**************************** MDN Countdown Launch Active Learning **************************
 https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown
 
 // counting backwards
 let i = 10;
 const countdownTitle = document.querySelector('.launch-countdown');
 const countdownDiv = document.createElement('div');
 countdownTitle.insertAdjacentElement('afterend', countdownDiv);
 while (i > 0) {
   const launchPara = document.createElement('p');
   launchPara.textContent = i;
   if (i === 10) launchPara.textContent = 'Countdown 10';
   if (i === 1) launchPara.textContent = 'Blast off!';
   countdownDiv.appendChild(launchPara);
   i--;
  }
  const countdownTitle = document.querySelector('.launch-countdown');
  const countdownDiv = document.createElement('div');
  countdownTitle.insertAdjacentElement('afterend', countdownDiv);
  for (let i = 10; i > 0; i--) {
    const countdownPara = document.createElement('p');
    countdownPara.textContent = i;
    if (i === 10) countdownPara.textContent = 'Countdown 10';
    if (i === 1) countdownPara.textContent = 'Blast off!';
    countdownDiv.appendChild(countdownPara);
  }
  */
  const countdownTitle = document.querySelector('.launch-countdown');
  const countdownDiv = document.createElement('div');
  countdownTitle.insertAdjacentElement('afterend', countdownDiv);
  let i = 10;
  do {
    const countdownPara = document.createElement('p');
    countdownPara.textContent = i;
    if (i === 10) countdownPara.textContent = 'Countdown 10 ...';
    if (i === 1) countdownPara.textContent = 'Blast off!';
    countdownDiv.appendChild(countdownPara);

    i--;
  } while (i > 0);


/**************************** MDN Looping Through Guest List **************************
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list

  pseudocode:
  Write a loop that will iterate over the guests array.
  Append two paragraphs to the DOM: one called 'Admit' and one called 'Riffraff'
  if Ross and Emily are included in the guests array then remove them and add them to the 'Riffraff' paragraph.
  Output the remainder of the guests.

  Create and append the two paragraphs... easy peasy.
  Use a for loop (and then try converting it to a 'for .. of') 
    and a conditional stmt to remove the riffraff guests,
    then output them to the riffraff paragraph.
  Output the remainder of the array to the 'vip' paragraph.

  Redo exercise using various looping stmts:
    do .. while
    for .. of
    while
    maybe write a callback function for a forEach() loop
*/
const guests = [
  'Chris', 'Anne', 'Ross', 'Colin', 'Terri', 'Emily', 'Sam', 'Kay', 'Bruce'
];
const guestsTitle = document.querySelector('.loops h2:nth-of-type(2)');
const guestsPara = document.createElement('p');

guestsPara.textContent = `${guests.join(' * ')}`;
guestsPara.classList = 'guestsOutput';
guestsTitle.insertAdjacentElement('afterend', guestsPara);
const vipPara = document.querySelector('.vip');
const riffraffPara = document.querySelector('.riffraff');
riffraffPara.textContent = 'Riffraff: ';
vipPara.textContent = 'VIP: ';

// No looping necessary -- just array methods.
// const guestsCopy = [...guests];
// riffraffPara.textContent += `${guestsCopy.splice(guestsCopy.indexOf('Ross'), 1)}, ${guestsCopy.splice(guestsCopy.indexOf('Emily'), 1)}.`;
// vipPara.textContent += `${guestsCopy.join(', ')}.`;
// riffraffPara.insertAdjacentElement('afterend', riffraffPara);

for (let i = 0; i < guests.length; i++) {
  if (guests[i].toLowerCase() !== 'ross' && guests[i].toLowerCase() !== 'emily') { 
    vipPara.textContent += guests[i] + ', ';
  } else {
    riffraffPara.textContent += guests[i] + ', ';
  }
}
vipPara.textContent = vipPara.textContent.slice(0, vipPara.textContent.length - 2) + '.';
riffraffPara.textContent = riffraffPara.textContent.slice(0, riffraffPara.textContent.length - 2) + '.';







/**************************** do.. while Loop through friends/clients array **************************
  const clients = [
    'Twyla',
    'Toby',
    'Sammie',
    'Teddy',
    'Fritz'
  ];
  */
  const friends = [
    'Olivia',
    'Shivaun',
    'Ed',
    'Dana',
    'MasaBoi'
  ];

/**************************** Exiting loops with break **************************
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break

  Search through an array of contacts and telephone numbers
  and return just the number of the searched for name.
  If there's no match, display 'Contact not found.' 
  Account for alternative uses of capitalization.
*/
const contacts = [
  'Shivaun:3128635528',
  'Olivia:3472663899',
  'Hannah:7183202230',
  'Jen:9170023223',
  'Krista:7974950592'
];
const h2 = document.querySelector('.exit-loop');
const contactsPara = document.createElement('p');
contactsPara.classList = 'contactsOutput';
contactsPara.textContent = contacts.join('; ');
h2.insertAdjacentElement('afterend', contactsPara);

const searchForm = document.querySelector('.search-form');
const searchResult = document.createElement('p');
searchForm.insertAdjacentElement('afterend', searchResult);
searchResult.style.cssText = 'padding:10px;border:solid 1px black;background-color:lightgrey;margin:1em 0;'; 
searchResult.textContent = 'Search Results:';
const searchBtn = document.querySelector('button[name="Submit"]');

function displayContact() {  
  const input = document.querySelector('#search');
  const searchTerm = input.value;
  // Save input as 'searchTerm' to reset value and refocus element.
  input.value = '';
  input.focus();
  for (let i = 0; i < contacts.length; i++) {    
    const splitContacts = contacts[i].toString().split(':');
    if (splitContacts[0].toString().toLowerCase() != searchTerm.toLowerCase()) {
      searchResult.textContent = `Contact not found for ${searchTerm}.`;
    } else if (splitContacts[0].toString().toLowerCase() === searchTerm.toLowerCase()) {
      searchResult.textContent = `Search Results: ${splitContacts[0]} at ${splitContacts[1]}`;
      break;
    }
  }
}
searchBtn.addEventListener('click', displayContact);

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
const arrayTitle = document.querySelector('.array-object-title');
namesPara = document.createElement('p');
namesPara.classList = 'namesPara';
namesPara.style.cssText = 'color:#a41b5f;';
arrayTitle.insertAdjacentElement('afterend', namesPara);

// Don't need a loop to output array in all caps to browser
// namesPara.textContent =`${names.join(' * ')}`;
// namesPara.textContent = names.join(' * ').toUpperCase();


/**************************** myMap() ************************** 
  from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#looping_through_a_collection
  How to use map():
  Pass a function into ARRAY.map(funcName), and map() calls the funcName function once for each item in the array, passing in the ARRAY item.
  It then ADDS THE RETURN VALUE FROM EACH FUNCTION CALL (what map() does internally; hint: how it works if I need to build a myMap()) to a new array, and finally returns the new array.
  In this case the function we provide converts the item to uppercase, so the resulting array contains all our ARRAY cats in uppercase.

  // from https://www.theodinproject.com/lessons/foundations-clean-code
  // function expression
  const sumArray = function(array) { 
    let sum = 0;
    array.forEach(function(number) {
      sum += number;
    });
    return sum;
  };
  // console.log(sumArray([2, 2, 2]));
  
  // create myMap(arr, callbackFn) function and pass arr and callbackFn params
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

/***************** Generic Function Loop w for.. of *****************
  Create a 'generic' function that takes an array as a param and returns the array to the browser.
  function genericLoop(arr) {
    const h1 = document.querySelector('h1');
    loopPara = document.createElement('p');
    h1.insertAdjacentElement('afterend', loopPara);
    
    for (const el of arr) {
      console.log(el)
      loopPara.textContent = arr.join(' * ');
    }
  }
  genericLoop(friends);
*/

  function genericLoop(arr) {
    const h1 = document.querySelector('h1');
    loopPara = document.createElement('p');
    h1.insertAdjacentElement('afterend', loopPara);

    // forEach() inline function
    // arr.forEach(function (el, index, arr) {
    //   // loopPara.textContent = arr.join(' * ');
    //   // loopPara.textContent += el.toUpperCase() + ', ';
    // })

    // for.. of stmt
    // for (const el of arr) {
    //   console.log(el)
    //   loopPara.textContent = arr.join(' * ');
    // }

    // for (let i = 0; i < arr.length; i++) {
    //   loopPara.textContent += arr[i] + ', ';
    //   // console.log(arr[i])
    //   console.log(loopPara.textContent)
    //   // return comma separated array elements but with a period at the end. slice
    //   // save all looped elements in a variable called 'returnedElements'
    // }
    // loopPara.textContent = loopPara.textContent.slice(0, loopPara.textContent.length - 2) + '.';
  }
genericLoop(friends);

/************************* filter() **********************************************
  Filter the names array content based on search criteria.
  Use filter() to filter an array by first letter "L".

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#searching_in_array

  This is hard. Not sure I can do it without looking at code.
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

/************************* Loop thru multiple arrays ***************************************
// https://javascript.info/while-for#labels-for-break-continue
function concatNames(arr3, arr1, arr2 ) {
  for (let i = 0; i < arr1.length; i++) {
    loopPara.textContent += `${arr3[i]} ${arr1[i]} ${arr2[i]}, `;
  }
  loopPara.textContent = loopPara.textContent.slice(0, loopPara.textContent.length - 2) + '.';
}
concatNames(designations, friends, lastNames);
*/

