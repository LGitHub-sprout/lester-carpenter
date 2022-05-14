// addEventListener

// convert to arrow function?
const btn2 = document.querySelector('input[value="Click Me Again!"]');
// Arrow function call of click event
btn2.onclick = () => alert('This click event is all JavaScript but it hinders the ability to attach more than one event (of any kind) to an element; therefore, it\'s acceptable but not an ideal method.');


// Web API Element Interface property selector .nextElementSibling
// btn2.nextElementSibling.addEventListener('click', clickMe);
// // addEventListener
// function clickMe() {
//   alert('Dang you annoying w all that clicking ... Lol');
// }

// Can invoke the function inside addEventListener function  
// btn2.nextElementSibling.addEventListener('click',
//   function () {
//     alert('This message was called inside the event listener.');
//   }
// )

// Multiple addEventListeners to same element w arrow functions.
btn2.nextElementSibling.addEventListener('click', () => alert('This click event is best practice since it\'s separated from the HTML and also allows for more than one event to be attached to it demonstrated by both the alert message popup and the mouseover event which changes the color of the text.'));
// Pass the 'event' object parameter to access event properties and functions via 'target', the DOM node that was accessed (clicked, in this case). 
btn2.nextElementSibling.addEventListener('mouseover', (event) => event.target.style.color = 'magenta');

// onmouseover mouseenter 
// function orangeBtn(event) {
//   event.target.style.color = 'orange';
// } 

const orangeBtn = document.querySelector('.orangeBtn');
orangeBtn.addEventListener('mouseover', () => orangeBtn.classList.toggle('orangeOn'));
// Log the click event object info
orangeBtn.addEventListener('click', (event) => console.log('OrangeBtn click event info: ', event));
