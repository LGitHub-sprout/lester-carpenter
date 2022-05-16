/************************** JS Loops ***************************
/*
  Getting loopy with built-in array methods (filter, map).
  for, while, do.. while, for.. of, forEach loops.
 */

/*************************** displayContact() ***************************
  Exiting loops with break.
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break

  Search through an array of contacts and telephone numbers
  and return just the number searched for.
  If there's no match, display 'Contact not found.' 

  Start w just logging the search results.

  @var searchTerm     string
  @var splitContacts  array
  @var 

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
    'Shivaun:3128635528',
    'Olivia:3472663899',
    'Hannah:7183202230',
    'Jen:9170023223',
    'Krista:7974950592'
  ];
// Selectors
const h2 = document.querySelector('div.loops h2');
const contactsPara = document.createElement('p');
contactsPara.classList = 'contactsOutput';

h2.insertAdjacentElement('afterend', contactsPara);

function displayContact(searchTerm) {

  // const blah = contacts.join().toLowerCase();
  // console.log(typeof blah, blah)

  for (i = 0; i < contacts.length; i++) {

    // const contactsToLower = contacts.join().toLowerCase();
    const splitContacts = contacts[i].split(':'); // split returns array

    // const contactsToLower = splitContacts[i].toString().toLowerCase();
    // console.log('logging contact names: ', splitContacts[0]);

    // need to set toLowerCase() on the searchTerm for string matching 
    // contactsToLower = splitContacts.toString().toLowerCase();
    // console.log('trying to lowercase', splitContacts[0].toLowerCase())
    if (splitContacts[0].toLowerCase() === searchTerm.toLowerCase()) {
      console.log('Anything?', splitContacts[0]) // nothing
      console.log(typeof splitContacts[0], 'Log searchTerm: ', splitContacts[0]);
    }
  }
  console.log('contacts', contacts)
}
displayContact('oLIViA');

