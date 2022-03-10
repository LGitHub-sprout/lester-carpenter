/* 
 * Array Built-in Functions.
*/

const musicians = [
  'Kd Lang',
  'Freddy Mercury',
  'Adam Lambert',
  'Elton John'
];

// pop()
// Don't change state--take a copy and UPDATE state (React). 
// const popArr2 = [...musicians].pop();
// console.log('musicians array after popping with spread syntax.', musicians);
// console.log('musicians array after popping without spread syntax.', musicians);
function methodsLoop(arr) {
  // selectors and attributes
  const popArr = musicians.pop(); // manipulated array: musicians
  
  const dtPop = document.querySelector('.pop'); // select element to append after
  const popArrSpan = document.createElement('span'); // new <span> for array
  const poppedElem = document.createElement('dd'); // <dd> for new details
  
  // Output
  poppedElem.append(`The popped element is ${popArr}. (Mutable)`);
  dtPop.insertAdjacentElement('afterend', poppedElem); //
  
  // refactored: reduce variable creation by chaining methods
  popArrSpan.append(musicians.join(' * ')); // chain string and append methods
  dtPop.insertAdjacentElement('afterend', popArrSpan);
}
methodsLoop(musicians);

// push()
const pushArr = musicians.push('George Michael', 'David Wojnarowicz'); // returns array length

// selectors and attributes
const dtPush = document.querySelector('.push'); // select .push <dt>
const pushArrSpan = document.createElement('span'); // new <span> for array
const pushedLenElem = document.createElement('dd'); // <dd> for new details

// Output stringified pushed array to browser
pushArrSpan.append(musicians.join(' * ')); 
pushedLenElem.append(`The new array length is ${pushArr}, which includes the newly pushed element(s), ${musicians[3]} and ${musicians[4]}.`);

dtPush.insertAdjacentElement('afterend', pushedLenElem); // insert ARRAY LEN <dd> after after <dt>
dtPush.insertAdjacentElement('afterend', pushArrSpan); // insert ARRAY <dd> after <dt>

// slice()
const sliceMusicians = musicians.slice(1, 3); // remove range to new array object

// create selectors, elements, and attributes
const dtSlice = document.querySelector('.slice');
const sliceArrElem = document.createElement('dd');
const sliceArrSpan = document.createElement('span');

// Output, stringify 
dtSlice.insertAdjacentElement('afterend', sliceArrElem);
sliceArrElem.append(sliceMusicians.join(' * '));
dtSlice.insertAdjacentElement('afterend', sliceArrSpan);
sliceArrSpan.append(musicians.join(' * '));

// splice
// insert index at 2, no removed items
// const spliceMusicians = musicians.splice(2, 0, 'Merce Cunningham');
// remove next item after inserted/1 item at index 2 is replaced w last item
const spliceMusicians = musicians.splice(2, 1, 'Merce Cunningham');

// selectors, elements, and attributes
const dtSplice = document.querySelector('.splice');
const spliceArrSpan = document.createElement('span');
const spliceArrReturnElem = document.createElement('dd');
spliceArrReturnElem.append(`${spliceMusicians} is the element spliced (and returned) from the array, and ${musicians[2]} is the replaced (therefore, added) item.`);

// Output and stringify
dtSplice.insertAdjacentElement('afterend', spliceArrSpan);
spliceArrSpan.append(musicians.join(' * '));
spliceArrSpan.insertAdjacentElement('afterend', spliceArrReturnElem);
