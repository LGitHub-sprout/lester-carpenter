/*
  Add full date to footer copyright.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
*/
const dateContainer = document.querySelector('.date');
const date = new Date();
const currentYear = date.getFullYear();
dateContainer.textContent = `${currentYear}`;

