/**************************** Wes Bos: Event Capture, Bubbling, Propagation Video  **
  https://www.youtube.com/watch?v=F1anRyL37lE

  loop through the divs and add an event listener 'click' using a callback function to get all the div's classes (classList) and also output each element's class(es) 
  helpful blog post https://bobbyhadz.com/blog/javascript-addeventlistener-queryselectorall
  const outerMost = document.querySelector('.outer-most');
  const middle = document.querySelector('.middle');
  const innerMost = document.querySelector('.inner-most');
  const allDivs = document.querySelectorAll('.wesBos');
  
  function logClassList(e) {
    // this.classList will return a DOMTokenList so use .value at end for element's values 
    
    // if (this.classList.value === 'middle wesBos') {
      //   console.log(this.classList.value)
      //   e.stopPropagation();
      // }
      
      console.log(this.classList.value)
      e.stopPropagation();
      // console.log(this.classList)
      // console.log('this s/b the node', e.target);
      // 'this' is what the method (addEventListener) is called against 
      // console.log(this) // ea individual div
      // use stop propagation to stop bubbling and no longer trigger more events
      // e.stopPropagation();
      // events bubble up and trigger events on parent elements of elements w listers attached
      // can wrap stop propagation in conditionals to target specific elements
      // try using stop propagation w capture option and note results (a little unexpected) 
    }
    allDivs.forEach((div) => {
      // add capture option runs event (function or object passed in) on capture down not on bubble up
      // capture OBJECT false is default
      // events (like click) ripple DOWN the doc and are triggered by default when they 'bubble' back up. 
      // add once option - listens for a click and unbinds itself, like removing the listener
      div.addEventListener('click', logClassList, {
        // capture: true,
        // once: true stops event (function) from running again
        once: true
      });
    });
*/
    
  // addEventListener .target?
  
  // convert to arrow function?
  const btn2 = document.querySelector('input[value="Click Me Again!"]');
  // Arrow function call of click event
  btn2.onclick = () => alert('This click event is all JavaScript but it hinders the ability to attach more than one event (of any kind) to an element; therefore, it\'s acceptable but not an ideal method.');
  
  // Call yellowBtn(event) function (below) w .onclick property
  btn2.onclick = yellowBtn;
  function yellowBtn(event) {
    event.target.style.color = 'yellow';
    console.log(event)
} 

// Web API Element Interface property selector .nextElementSibling
// btn2.nextElementSibling.addEventListener('click', clickMe);
// // addEventListener
// function clickMe() {
//   alert('Dang you annoying w all that clicking ... Lol');
// }

// // Can invoke the function inside addEventListener function  
// btn2.nextElementSibling.addEventListener('click',
// // Anonymous function
//   function () {
//     alert('This message was called inside the event listener.');
//   }
// )

// Multiple addEventListeners to same element w arrow functions.
btn2.nextElementSibling.addEventListener('click', () => alert('This click event is best practice since it\'s separated from the HTML and also allows for more than one event to be attached to it demonstrated by both the alert message popup and the mouseover event which changes the color of the text.'));
// Pass the 'event' object parameter to access event properties and functions via 'target', the DOM node that was accessed (clicked, in this case). 
btn2.nextElementSibling.addEventListener('mouseover', (event) => event.target.style.color = 'magenta');

// onmouseover mouseenter 
function orangeBtn(event) {
  event.target.style.color = 'orange';
  console.log(event)
} 

const orangeButton = document.querySelector('.orangeBtn');
orangeButton.addEventListener('mouseover', () => orangeButton.classList.toggle('orangeOn'));
// Log the click event object info
orangeButton.addEventListener('click', (event) => console.log('OrangeBtn click event info: ', event));
