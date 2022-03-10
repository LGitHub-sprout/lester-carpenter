const musicians = [
  'Kd Lang',
  'Freddy Mercury',
  'Adam Lambert',
  'Elton John'
];
// DRY function test: loop array, handle each item individually (use switch)
// function arrayLoop(arr) {
//   arr.forEach((arrayItem) => {
//     if (arrayItem === 'Kd Lang') {
//       console.log(`Who is this: ${arrayItem}`);
//     }
//   console.log(`${arrayItem}`);
//   });
// };
// arrayLoop(musicians);
// arrayLoop(clients);

// Page selectors
const arrFuncMainTitle = document.querySelector('.main-title + p');
// Add a class attribute for styling
const arrPara = document.createElement('p');
arrFuncMainTitle.insertAdjacentElement('afterend', arrPara);

arrPara.append(musicians.join(' * '));
methodsLoop(musicians);
