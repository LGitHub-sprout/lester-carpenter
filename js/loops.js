/* Exiting loops with break.
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
searchResult.style.cssText = 'padding:10px;border:solid 1px black;background-color:linen;margin:1em 0;'; 
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

/* Build  a custom myMap() function
  based on Briggs' https://briggs.dev/blog/understanding-callbacks
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
const arrayTitle = document.querySelector('.array-object-title');
namesPara = document.createElement('p');
namesPara.classList = 'namesPara';
namesPara.style.cssText = 'color:#a41b5f;';
arrayTitle.insertAdjacentElement('afterend', namesPara);

// Don't need a loop to output array in all caps to browser
// namesPara.textContent =`${names.join(' * ')}`;
// namesPara.textContent = names.join(' * ').toUpperCase();

/*
// Output copy of names array to browser in all caps using .forEach
const newNames = [];
names.forEach((name, index, array) => {
  newNames.push(name.toUpperCase())
  console.log(index)
  console.log('forEach loop array', array)
}); // Can I make this a function expression?
// console.log('newNames array (all uppercase): ', newNames);
namesPara.textContent = newNames.join(' * ')
console.log('names array: ', names);
*/

// forEach() Method Syntax 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

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
  // Example of map()
  // console.log(sumArray([2, 2, 2]));
*/

/*
  MDN looping through a guest list
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list

  pseudocode:
  Write a loop that will iterate through the guests array.
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
*/
const guests = [
  'Chris', 'Anne', 'Ross', 'Colin', 'Terri', 'Emily', 'Sam', 'Kay', 'Bruce'
];
const guestsTitle = document.querySelector('.loops h2:nth-of-type(1)')
const guestsPara = document.createElement('p');

guestsPara.textContent = `${guests.join(' * ')}`;
guestsTitle.insertAdjacentElement('afterend', guestsPara);
const vipPara = document.querySelector('.vip')
const riffraffPara = document.querySelector('.riffraff');
riffraffPara.textContent = 'Riffraff: ';
vipPara.textContent = 'VIP: '

// No looping necessary -- just array methods.
const guestsCopy = [...guests];
riffraffPara.textContent += `${guestsCopy.splice(guestsCopy.indexOf('Ross'), 1)}, ${guestsCopy.splice(guestsCopy.indexOf('Emily'), 1)}.`;
vipPara.textContent += `${guestsCopy.join(', ')}.`
// riffraffPara.insertAdjacentElement('afterend', riffraffPara);

// for (let i = 0; i < guests.length; i++) {
//   if (guests[i].toLowerCase() !== 'ross' && guests[i].toLowerCase() !== 'emily') { 
//     vipPara.textContent += guests[i] + ', ';
//   } else {
//     riffraffPara.textContent += guests[i] + ', ';
//   }
// }
// vipPara.textContent = vipPara.textContent.slice(0, vipPara.textContent.length - 2) + '.';
// riffraffPara.textContent = riffraffPara.textContent.slice(0, riffraffPara.textContent.length - 2) + '.';

/*
 * MDN Countdown Launch Active Learning
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_launch_countdown
 */