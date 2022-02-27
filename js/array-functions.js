/* 
 * Array Built-in Functions 
*/

// Primitives 
// const bar = 'lgc';
// console.log(bar);
// bar.toUpperCase();
// console.log('Is it uppercased? ', bar, 'No');
// const LGC = bar.toUpperCase();
// // Assignment gives the primitive a new (not mutated) value
// console.log('Now is it uppercased? ', LGC, 'Yes');

// Array
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


// variables to hold ea newly created array


// does NOT stringify the array 
musicians.toString();
if (typeof(musicians) === 'string') {
  console.log('musicians is a string');
} else {
  console.log('The musicians array is NOT a string.')
}
console.log('Is musicians array a string?', 'It\'s a(n)', typeof (musicians));

// but, calling toString() on a renamed variable makes it an array 
const musiciansString = musicians.toString();
if (typeof (musiciansString) === 'string') {
  console.log('musiciansString is a string');
} else {
  console.log('musicians is not a string?')
}
// para.append(musicians);

// pop() method
const poppedArr = musicians.pop(); // manipulated array: musicians

// selectors
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
const pushArrLen = musicians.push('George Michael'); // number: array length

// selectors and attributes
const dtPush = document.querySelector('.push');
const PushArrElem = document.createElement('dd'); // new <dd> for array
dtPush.setAttribute('class', 'pushArr');
const pushedLenElem = document.createElement('dd');

// stringified array
const pushMusiciansArr = musicians.join(' * ');

// Output pushed array to browser
PushArrElem.append(pushMusiciansArr); 
// output new length of pushed array.
pushedLenElem.append(`The new array length is ${pushArrLen}, which represents the newly pushed element, ${musicians[3]}.`);

// insert new <dd> after <dt>
dtPush.insertAdjacentElement('afterend', pushedLenElem); // insert ARRAY LEN <dd> after after <dt>
dtPush.insertAdjacentElement('afterend', PushArrElem) // insert ARRAY <dd> after <dt>

