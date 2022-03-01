/* 
 * Array Built-in Functions Page (with commented JS noodling).
*/

const clients = ['Twyla', 'Teddy', 'Sammie', 'Toby'];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
// for (const [index, client] of clients.entries())
//   console.log(index, client);
// 0 'Twyla'
// 1 'Teddy'
// 2 'Sammie'
// 3 'Toby'
// clients.forEach(client => console.log(client));

// const newClients = [...clients].concat('Cash Monies');
// const newClients = [...clients].push('Cash Monies');
// splice(start, deleteCount) 
const newClients = ['Cash KowKittens', ...clients, 'Cash Monies'];
// console.log(newClients)
// console.log('Right, bc push returns array length:', newClients);
// console.log('And clients array is unchanged: ', clients);

const addClients = [
  // add clients array from index 0-1
  ...clients.slice(0, 1), // not inclusive
  'Nanki Poo', // add item at index 2
  ...clients.slice(1) // spread rest of array from slice index 
];
console.log('Added client: ', addClients);

// find item in array w index, then remove
const rmClients = [
  ...addClients.slice(0, 2), // remove Teddy (not inclusive)
  ...addClients.slice(3)
  ];
console.log('This is rmClients', rmClients);


// Primitives 
// const bar = 'lgc';
// console.log(bar);
// bar.toUpperCase();
// console.log('Is it uppercased? ', bar, 'No');
// const barUC = bar.toUpperCase();
// // Assignment gives the primitive a new (not mutated) value
// console.log('Now is it uppercased? ', barUC, 'Yes');

const musicians = [
  'Kd Lang',
  'Freddy Mercury',
  'Adam Lambert',
  'Elton John'
];
// Selectors
const arrFuncMainTitle = document.querySelector('.main-title + p');
// Add a class attribute for styling
const arrPara = document.createElement('p');
arrFuncMainTitle.insertAdjacentElement('afterend', arrPara);

const musiciansToString = musicians.join(' * ');
arrPara.append(musiciansToString);

// Definition List function (to keep code below DRY)
// How would I code each of the different methods on the array?
  // conditional(s) for each criteria/method:
      // if METHODS === method => do this code
      // if METHODS === method => do this code
  
// Divide the problem
  // output a list of methods in <dd><code>push()</code></dd> elements to the browser
  // analogy:  this is just like outputting array items to an <ul><li>array element</li></ul>
  // for each arrayMethod passed into the function:
    // output a new array created by each method
        // can i output by getting a selector for ea element or is creating them better?
    // create a new <dd> element
    // set an attribute for the new <dd> element based on each specific new array method
    // append
  // I would have to supply the entire list of methods to loop thru, yes?
    // toString slice splice pop push shift unshift
    // length concat join delete

  // variables
    // const elemSelector = each different element that represents the specific method


// does NOT stringify the array 
musicians.toString();
if (typeof(musicians) === 'string') {
  console.log('musicians is a string');
} else {
  console.log('The musicians array is NOT a string.');
}
console.log('Is musicians array a string?', 'It\'s a(n)', typeof (musicians));

// but, calling toString() on a renamed variable makes it an array 
const musiciansString = musicians.toString();
if (typeof (musiciansString) === 'string') {
  console.log('musiciansString is a string');
} else {
  console.log('musicians is not a string?');
}

// pop()
const poppedArr = musicians.pop(); // manipulated array: musicians

// selectors and attributes
const ddPop = document.querySelector('.pop'); // select element to append after
const newPopDD = document.createElement('dd'); // create new elem for array
newPopDD.setAttribute('class', 'poppedArr');
const poppedElem = document.createElement('dd'); // create var for popped elem

// Only way I know to output popped array and popped element to browser. 
ddPop.insertAdjacentElement('afterend', newPopDD);
poppedElem.append('The popped element is ', poppedArr);
ddPop.insertAdjacentElement('afterend', poppedElem); //
const popMusicians = musicians.join(' * '); // stringified array
newPopDD.append(popMusicians); // output array to browser
ddPop.insertAdjacentElement('afterend', newPopDD);

// push()
// apply method to array and save in a var
const pushArrLen = musicians.push('George Michael', 'David Wojnarowicz'); // number: array length

// selectors and attributes
const dtPush = document.querySelector('.push'); // existing <dt>
const PushArrElem = document.createElement('dd'); // new <dd> for array
dtPush.setAttribute('class', 'pushArr');
const pushedLenElem = document.createElement('dd'); // <dd> for new array

// stringified array
const pushArrayString = musicians.join(' * ');

// Output pushed array to browser
PushArrElem.append(pushArrayString); 
// output new length of pushed array.
pushedLenElem.append(`The new array length is ${pushArrLen}, which represents the newly pushed element(s), ${musicians[3]} and ${musicians[4]}.`);

// insert new <dd> after <dt>
dtPush.insertAdjacentElement('afterend', pushedLenElem); // insert ARRAY LEN <dd> after after <dt>
dtPush.insertAdjacentElement('afterend', PushArrElem); // insert ARRAY <dd> after <dt>

// slice()
const sliceArr = musicians.slice(1, 3); // remove range to new array object

// stringified sliced array
sliceArrString = sliceArr.join(' * '); 
const origMusiciansArr = musicians.join(' * ');

// create selectors, elements, and attributes
const dtSlice = document.querySelector('.slice'); // select existing <dt>
const sliceArrElem = document.createElement('dd'); // new <dd> for array
const origMusiciansSpan = document.createElement('span');

// Output 
dtSlice.insertAdjacentElement('afterend', sliceArrElem);
sliceArrElem.append(sliceArrString);
dtSlice.insertAdjacentElement('afterend', origMusiciansSpan);
origMusiciansSpan.append(origMusiciansArr)

// splice
// const spliceMusicians = musicians.splice(2, 0, 'Merce Cunningham'); // insert index 2, no removed items 
const spliceMusicians = musicians.splice(2, 1, 'Merce Cunningham'); // remove next item after inserted 

// selectors, elements, and attributes
const dtSplice = document.querySelector('.splice');
const spliceArrSpan = document.createElement('span');
const spliceArrElemSelector = document.querySelector('dl dd:nth-child(17)');
const spliceArrElem = document.createElement('dd');

// stringified array
const spliceArrString = musicians.join(' * ');

// Output 
dtSplice.insertAdjacentElement('afterend', spliceArrSpan);
spliceArrSpan.append(spliceArrString);
spliceArrElemSelector.insertAdjacentElement('afterend', spliceArrElem);
spliceArrElem.append(`${spliceMusicians} is the element spliced (and returned) from the array, and ${musicians[2]} is the replaced (therefore, added) element.`);




// return the last item of an array without knowing its length
// const musiciansLastItem = musicians[musicians.length - 1];
// console.log(`${musiciansLastItem} is the last item in the array`);
