
const sketchContainerWrap = document.querySelector('.sketch-container-wrapper');
const setGridSizeBtn = document.querySelector('.set-grid-size');  
const h1MainTitle = document.querySelector('.main-title');
let userChoice;

setGridSizeBtn.addEventListener('click', function (e) {
  userChoice = prompt('How many squares across should the grid be?');
  if ((userChoice > 100) || (userChoice === '') || Math.sign(userChoice) === -1) {
    alert('The maximum number of allowed squares is 100 and the minimum is 1.');
    return;
  }
  if (userChoice === null) return;
  if (Math.sign(userChoice) === 0) {
    alert('Zero, really? S M H');
    return;
  }
  calcGrid();
});

function calcGrid(squaresPerSide) {
  if (userChoice) {
    squaresPerSide = userChoice;
    sketchContainerWrap.firstElementChild.remove();
  } else squaresPerSide = 16;

  const gridArea = Math.pow(squaresPerSide, 2);
  const gridHeight = Number(100 / squaresPerSide).toFixed(5);
  const gridWidth = Number(100 / squaresPerSide).toFixed(5);
  
  const sketchContainer = document.createElement('div');
  sketchContainer.classList = 'sketch-container';
  sketchContainerWrap.appendChild(sketchContainer);

  const rainbowBtn = document.querySelector('.bg-rainbow')

  for (let i = 0; i < gridArea; i++) {
    gridSquare = document.createElement('div');
    gridSquare.classList = 'grid-square';

    gridSquare.style.cssText = `height:${gridHeight}%; flex: 0 0 ${gridWidth}%`;
    // https://medium.com/codex/separating-touch-and-mouse-events-in-your-javascript-games-62181ae949f2
    
    sketchContainer.appendChild(gridSquare);

    // gridSquare.addEventListener('mouseenter', function (e) { // mouseenter, mouseover
    //   e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    //   // console.log(this)
    //   // Each pass changes to a random RGB color.
    //   // The each pass after that adds 10% black. 
    //   // console.log(red, green, blue)
    //   // console.log('mouseenter')
    //   // console.log(typeof e.target, 'array?', Array.isArray(e.target), e.target) // it's an object but not array
    // }); 
    
    gridSquare.addEventListener('mouseover', calcBgColor); // mousedown
    function calcBgColor(e) {
      e.target.style.background = 'rgb(' + calcRandNum(0, 256) + ', ' + calcRandNum(0, 256) + ', ' + calcRandNum(0, 256) + ')';
      // e.target.style.background = `rgb(randoNum(0, 256), randoNum(0, 256), randoNum(0, 256));`;
      
      // e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    }
    // gridSquare.addEventListener('mouseleave', function (e) { // mouseleave, mouseout
    //   e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
    //   console.log('mouseleave')
    //   console.log(red, green, blue)
    // })
    // gridSquare.addEventListener('mouseenter', gridBgChange);
  }
  // gridSquare.removeEventListener('mouseover', handleBgChange);

  // console.log('squaresPerSide', squaresPerSide)
  // console.log('gridArea: ', gridArea)
}
calcGrid();

function calcRandNum(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

/*
  https://stackoverflow.com/questions/3117756/javascript-create-element-and-set-attributes
  const attrs = {
    'id':     'idName',
    'class':  'className'
  }
  function createElement(el, attrs) {
    const element = document.createElement(el);
    for (const val in attrs) {
      //for support in the setAttrubute() method:
      if (element.setAttribute) {
        if (element[val] in element) {
          element.setAttribute(val, attrs[val]);
        } else {
          element[val] = attrs[val];
          // console.log(attrs[val], element[val])
          }
      } else {
          element[val] = attrs[val];
      }
    }
    return element;
  }
  console.log(createElement('span'))
  const cSpan = createElement('p', {'id':'poop'});
  cSpan.textContent = 'Hello, World!';
  h1MainTitle.insertAdjacentElement('afterend', cSpan)
*/

// https://stackoverflow.com/questions/17264182/javascript-efficiently-insert-multiple-html-elements
var msgContainer = document.createDocumentFragment();
for (var i = 0; i < 3; i++) {
    var option = msgContainer.appendChild(document.createElement("option"));
    option.text = 'whatevs' //response.data[i].name;
    option.value = 'whatevs' // response.data[i].id;
}
document.getElementById("etch-a-sketch").appendChild(msgContainer);
// create is custom function
// const msgContainer = document.createDocumentFragment();
// for (var i = 0; i < 3; i++) {
//     msgContainer.appendChild(create("option", {
//         text:  'whatevs', // response.data[i].name,
//         value:  'whatevs' // response.data[i].id
//     }));
// }
// document.getElementById("friends").appendChild(msgContainer);

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getColor())
