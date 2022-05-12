/*
 * Odin Project Assessment:  FizzBuzz App
 * https://stackoverflow.com/questions/9578348/best-way-to-execute-js-only-on-specific-page
 * https://stackoverflow.com/questions/1368264/how-to-extract-the-hostname-portion-of-a-url-in-javascript
 *
 */

function fizzBuzz(userNum) {
// use button w event listener 
  // const host = 'http://127.0.0.1:5503/odin-project/fizzbuzz.html';
  // if (window.location.href === host) {
  //   // userNum = parseInt(prompt('Enter your FizzBuzz number'));
  // }
  userNum = parseInt(prompt('Enter your FizzBuzz number'));
  const h2 = document.getElementById('fizzBuzz');
  const h1 = document.querySelector('h1');
  const fbUnorderedList = document.createElement('ul');
  fbUnorderedList.setAttribute('class', 'fizzBuzzList');
  h2.insertAdjacentElement('afterend', fbUnorderedList);
  for (let i = 1; i <= userNum; i++) {
    const fbListItem = document.createElement('li');
    fbUnorderedList.insertAdjacentElement('beforeend', fbListItem);
    
// use switch
    if (i / 5 === 3 && i / 3 === 5) {
      fbListItem.textContent = 'FizzBuzz';
    } else if (i % 3 === 0) {
      fbListItem.textContent = 'Fizz';
    } else if (i % 5 === 0) {
      fbListItem.textContent = 'Buzz';
    } else {
      fbListItem.append(i); // must append i to the (DOM) <li> on ea iteration
    }
  }
}
// fizzBuzz();