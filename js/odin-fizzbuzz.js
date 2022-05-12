/*
 * Odin Project Assessment:  FizzBuzz App
 * https://stackoverflow.com/questions/9578348/best-way-to-execute-js-only-on-specific-page
 * https://stackoverflow.com/questions/1368264/how-to-extract-the-hostname-portion-of-a-url-in-javascript
 *
 */

function fizzBuzz(userNum) {
// use button w event listener 
// also try using arrow function
  // userNum = parseInt(prompt('Enter a number btwn 15-100') > 101 ? alert('Re-enter a smaller number btwn 15-100') : userNum);
  userNum = parseInt(prompt('Enter a number btwn 15-100'));
  // console.log('fuck', userNum)
  const h2 = document.getElementById('fizzBuzz');
  const h1 = document.querySelector('h1');
  const fbUnorderedList = document.createElement('ul');
  fbUnorderedList.setAttribute('class', 'fizzBuzzList');
  h2.insertAdjacentElement('afterend', fbUnorderedList);
  for (let i = 1; i <= userNum; i++) {
    if (userNum > 100) { return; }
    // if (userNum > 100) { confirm('Your number was too big—Try again.'); }
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
fizzBuzz();