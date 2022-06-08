/**************************** Traversy Media: JS DOM Crash Course parts 1-4 ***

  Examining the Document Object
  
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
newDiv.className = 'Hello';
newDiv.id = 'Hello#1';
newDiv.setAttribute('title', 'This is the Hello Div');
newDiv.style.cssText = 'font-size:30px;text-align:center;margin:1em';
// console.log(newDiv)

// create a text node  
const newDivText = document.createTextNode('This Sentence Is Created In JS');
newDiv.appendChild(newDivText);
// try using insertBefore method
articleElement.insertAdjacentElement('beforebegin', newDiv);

// console.log(articleElement.previousElementSibling)











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

