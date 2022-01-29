/*
  Global JS Page Index
  *
  * Footer: add full copyright date.
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
*/

// Footer: add full copyright date.
const dateContainer = document.querySelector('.date');
const date = new Date();
const currentYear = date.getFullYear();
dateContainer.textContent = `${currentYear}`;

