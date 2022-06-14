/**************************** Traversy Media: JS DOM Crash Course parts 1-4 ***

  Part 1: Examining the Document Object
  
 console.log('console.log... ', document.firstChild)
 console.dir('console.dir... document.lastChild', document.firstChild)
 // console.log(document)
 // Not the way to select objects/nodes... just to demo what's available 
 console.dir(document.URL)
 Not just readable, but also writable and can be changed w my scripts.
 document.title = 'Poop is set by Lester in JS';
 console.log(document.title)
 console.log(document.doctype)
 console.log(document.fonts)
 console.log(document.all) // lists all the nodes and their indexes 
 console.log(document.body.firstChild) // note use of body
 document.all[40].classList.value = 'POOP'; // change header class names
 console.log(document.all[40].classList.value) // get the header element's classList
 
 // Get all links on page, loop through object (not an array)
const allLinks = document.links;
console.log(typeof allLinks, Array.isArray(allLinks));
for (const link in allLinks) {
  console.log(`${link}: ${allLinks[link]}`)
}

 // (array-like) HTMLCollection can be converted to array 
 console.log(document.links) 
 const linksArr = Array.from(document.links);
 console.log('The page links array', linksArr);
 linksArr.forEach((link, index) => {
   console.log(`link no. ${index} ${link}`);
 });
 console.log('the 11th link on the page: ', linksArr[11])
 console.log(document.images)
 */

 /**************************** SELECTORS and STYLING: .style ***
  querySelector, querySelectorAll, getElementsByClassName, getElementById, getElementsByTagName

   console.log(document.querySelector('.main-title'));
   console.log(document.getElementById('loops'));
   const mainTITLE = document.querySelector('.main-title');
   const mainTitle2 = document.querySelector('.main-title')
   mainTITLE.textContent = 'POOP';
   mainTITLE.style.color = 'red';
  
  Tip: innerText and innerHTML respect styling whereas textContent doesn't.
  Use innerText and innerHTML to return text that retains its styling.
  
  document.getElementsByClassName (notice plural) returns live 'array-like' HTMLCollection

  querySelectorAll returns a static (not live) NodeList, must be valid CSS selector STRING
  NodeList doesn't need to be converted to array and can use forEach().
*/

// returns HTMLCollection which can be accessed w bracket notation
const buttons = document.getElementsByClassName('btn');
// console.log(buttons)
// console.log(buttons[3])
buttons[3].style.maxWidth = '200px'; 
buttons[3].style.cssText = 'background-color:linen;border:solid 1px #7f7f7f;border-radius:4px;padding:3px;width:200px;display:block;margin:.5em auto;';
// loop through collection w either for..in or convert to array, then loop
// for (const button in buttons) {
//   // console.log(`${button}: ${buttons[button]}`)
//   // console.log(button)
//   console.log(buttons[button])
// }
const buttonsArr = Array.from(buttons);
buttonsArr.forEach((button) => {
  button.style.cssText = 'background-color:linen;border:solid 1px #7f7f7f;border-radius:4px;padding:3px;width:200px;display:block;margin:.5em auto;';
});

// Select odd and even buttons and style differently.
// Can also use standard 'for' and forEach() loop
const oddBtns = document.querySelectorAll('.btn:nth-child(odd)');
oddBtns.forEach((btn) => {
  btn.style.cssText = 'background-color:coral;border:solid 1px #7f7f7f;border-radius:4px;padding:3px;width:200px;display:block;margin:.5em auto;';
})
// Returns NodeList
const evenBtns = document.querySelectorAll('.btn:nth-child(even');
for (const btn of evenBtns) {
  btn.style.cssText = 'background-color:thistle;border:solid 1px #7f7f7f;border-radius:4px;padding:3px;width:200px;display:block;margin:.5em auto;';
}
for (let i = 0; i < evenBtns.length; i++) {
  // evenBtns[i] can be referred to as the 'current iteration'. I use 'current element'. 
  // console.log(evenBtns[i])
  // can loop through oddBtns as well!
  oddBtns[i].textContent = 'Crazy Button Names!'; 
}
// Can also use bracket notation on NodeList
evenBtns[0].style.cssText = 'background-color:yellow;border:solid 1px #7f7f7f;border-radius:4px;padding:3px;width:200px;display:block;margin:.5em auto;color:magenta;';
evenBtns[0].textContent = 'New Button Name'

/**************************** Traversing the DOM ***
  Node > .parentNode .parentElement .lastChild 

  Element > .children .firstElementChild .lastElementChild .nextElementSibling .previousElementSibling

  Maybe use nodes and NodeLists for granular details such as comments, #text, and textContent?
  Use Element for access to classes and ids?
  
  const loopsDiv = document.querySelector('.loops'); // NodeList
  // loopsDiv.parentElement.style.backgroundColor = 'purple';
  // loopsDiv.parentNode.style.cssText = 'color: white';
  console.log(loopsDiv.nextSibling);

  // Node.childNodes returns a live NodeList
  // console.log(loopsDiv.childNodes);
  // console.log('childNodes: ', loopsDiv);
  // console.log('nodeName: ', loopsDiv.nodeName);
  // console.log('fifth item in nodeList: ', loopsDiv[5])
  // loopsDiv[5].style.cssText = 'background-color: yellow';
*/
// How to query parent and children nodes 
const mainTitle = document.querySelector('.main-title')
// parentNode
// mainTitle.parentNode.style.backgroundColor = 'linen';
// These two seem identical
// console.log('parentElement: ', mainTitle.parentElement)
// console.log('parentNdoe: ', mainTitle.parentNode)

// mainTitle.classList = 'Suozzi';
// mainTitle.className = 'poop';

const articleElement = document.querySelector('#dom')
// console.log('articleElement: ', typeof articleElement, 'isArray?:', Array.isArray(articleElement))

// Don't use childNodes
// childNodes returns a NodeList (basically an array but has line breaks etc.)
// console.log('use nodes properties to get NodeList: ', articleElement.childNodes)
// console.log(articleElement.childNodes[3])
// articleElement.childNodes[3].textContent = 'Poop';

// .children property returns HTMLCollection of the Element interface
// console.log(articleElement.children)
// articleElement.children[0].style.backgroundColor = 'mistyrose';

// firstChild of Node interface (returns NodeList)
// lastChild 
// console.log(typeof articleElement, articleElement.firstChild)
// console.log(typeof articleElement, articleElement.lastChild)

// firstElementChild of Element interface
// lastElementChild
// console.log(articleElement.firstElementChild)
// console.log(articleElement.lastElementChild)

// nextSibling Node interface
// previousSibling
// console.log(articleElement.nextSibling)

// nextElementSibling Element interface
// previousElementSibling
const newDiv = document.createElement('div');
newDiv.classList = 'Hello goodbye whatevs EarlMasaboi';
newDiv.id = 'Hello-#1';
newDiv.setAttribute('title', 'This is the Hello Div');
newDiv.style.cssText = 'font-size:30px;text-align:center;margin:1em';
// console.log(newDiv)
// console.log(typeof newDiv.classList, 'DOMTokenList is an array?', Array.isArray(newDiv.classList));
// console.log(newDiv.classList[3]) // not an array but can still use bracket notation to access items, I guess.
// console.log(newDiv.id) 


// create a text node  
const newDivText = document.createTextNode('This Sentence Is Created In JS');
newDiv.appendChild(newDivText);
// try using insertBefore method
articleElement.insertAdjacentElement('beforebegin', newDiv);


// console.log(articleElement.previousElementSibling)

/**************************** Part 3 .innerHTLM ***
 
  .innerHTML .classList 
  Different events and event types, adding event listeners, adding properties.

  Keyboard Events
    keydown

 */
const part3Heading = document.querySelector('.traversy-part-three');
part3Heading.id = 'pert-three';
const newDiv3 = document.createElement('div');
newDiv3.style.cssText = 'width:100%;height:200px;background-color:#737CA1;'; 
const paraX = document.querySelector('.x');
const paraY = document.querySelector('.y');
const submitBtn = document.querySelector('input[type="submit"]');

// Trying to get input element value on btn click but not working 
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const newItemInput = document.querySelector('.new-item');
  console.log(e.target) // return element? no
  // console.log(e.target.value) // submit btn value
  console.log(newItemInput.value);

  // console.log('classList: ', newItemInput.classList)
})

// Don't use .innerHTML until I can be 100% sure to escape the HTML (plugins) 
part3Heading.insertAdjacentElement('afterend', newDiv3);

// call Element properties on any valid element object 
// console.log(typeof part3Heading, part3Heading.className)
// DOMTokenList is type of object but not an array: DOMTokenList
// console.log(typeof part3Heading, Array.isArray(part3Heading)); 

//   function buttonClicked(e) {
  //   console.log(e.target, 'Button clicked');
  // };
// part3Heading.addEventListener('mouseenter', buttonClicked);
// newDiv3.addEventListener('mouseenter', buttonClicked);
// newDiv3.addEventListener('mouseover', buttonClicked);
// newDiv3.addEventListener('mouseleave', buttonClicked);
// newDiv3.addEventListener('mouseout', buttonClicked);
// newDiv3.addEventListener('mousemove', bindEvent); // binds the offset coordinates for colored rectangle

const newItem = document.querySelector('.new-item');
newItem.addEventListener('input', bindEvent);

function bindEvent(e) {
  // console.log('e.target.value: ', e.target.value)
  inputVal = e.target.value;
  // console.log(inputVal)
  // console.log('event type: ', e.type)
  // console.log('e.target: ', e.target.classList)
  // console.log('newItemInput: ', newItemInput)
  // console.log(e.target.nodeValue)


  // paraX.textContent = `Offset X: ${e.offsetX}`;
  // paraY.textContent = `Offset Y: ${e.offsetY}`;
  // newDiv3.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;

  // part3Heading.textContent = 'You just changed the header content!';
  // console.log(e);
  // console.log('currentTarget: ', e.currentTarget)
  // console.log('MouseEvent.clientx', e.clientX, 'and offsetY', e.offsetY);
  // console.log(e.target)
  // console.log(e.target.id)
  // Single classList
  // console.log(e.target.classList[2])
  // All classList
  // console.log(e.target.classList)
  // console.log(e.target.className)
  
  // Event Types
};





/********* Test forEach() and loops on both NodeList and HTMLCollection *********
  const btnGroup = document.querySelectorAll('#btn2');
  // .forEach works w NodeList
  btnGroup.forEach(btn => {
    btn.textContent = 'New Button Content';
    btn.style.cssText = 'background-color:lime;';
  })
  */
  const btnGroup2 = document.getElementsByClassName('buttonNodeList');
  // for loops work w HTMLCollections, but not forEach()
  // for (i = 0; i < btnGroup2.length; i++) {
  //   console.log(btnGroup2[i])
  // }
  // HTMLCollection method .namedItem() returns first elem matching ID, name attribute 
  // console.log(btnGroup2.namedItem('btn2'))

  // btnGroup2.forEach(btn => {
    //   console.log(btn)  
    // })
    // btnGroup2Arr = Array.from(btnGroup2);
    // console.log(Array.isArray(btnGroup2Arr)) // HTMLCollection
    // btnGroup2Arr.forEach(btn => {
      //   console.log(btn);
      // })

const multipleSelectors = document.querySelectorAll('li, p');
const dataSrc = document.querySelector('p[data]')
// console.log('This is dataSrc?', dataSrc);
const dataActiveP = document.querySelector('p[data-active="1"]');
// console.log(dataActiveP)

const outerDiv2 = document.querySelector('.outer');
// By default, querySelectorAll only verifies that the LAST ELEMENT in the selector is within the search scope. 
const innerDiv2 = document.querySelectorAll('.outer .inner');
// console.log(innerDiv2.length); 

