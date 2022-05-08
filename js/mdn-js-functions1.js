/************************* MDN Functions Assmts | The Random Name App ********************* 

  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions#functions_1
  
  DOM manipulation: createElement(), textContent, appendChild(), querySelector(), insertAdjacentElement

  Create a simple function, chosenName(), that prints a random name from the provided array, names, to created 'para' element and run it once.
*/
const names = [
  'Sexy Mike',
  'Li\'l Kang',
  'Rosie Doggers',
  'Krista',
  'Liz',
  'Barney Doggers',
  'Gesh Doggers',
  'Shivaun',
  'Lester'
  ];
function chooseName() {
  const h2 = document.querySelector('h2');
  const para = document.createElement('p');
  para.setAttribute('class', 'func1Assmt');
  h2.insertAdjacentElement('afterend', para);
  const namesLength = names.length;
  const randomNum = parseInt(Math.random() * (namesLength));
  return para.textContent = names[randomNum];
  }
chooseName();

// https://javascript.info/function-expressions 
// function ask(question, yes, no) {
//   if ( confirm(question) ) yes() //, console.log('yes, poop')
//   else no() //, console.log('no, poop') 
// }
// ask('Click "OK" if you like my website, "Cancel" if you don\'t.',
//   function () {
//     alert('Thank you :p');
//   },
//   function () { alert('LMK how I can improve!'); }
// );
