
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
  if (Math.sign(userChoice) === 0) {
    alert('Zero, really? S. M. H.');
    return;
  }
  //  || userChoice !== Number
  if (userChoice === null) return;

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

  // let gridSquare;

  for (let i = 0; i < gridArea; i++) {
    gridSquare = document.createElement('div');
    gridSquare.classList = 'grid-square';

    gridSquare.style.cssText = `height:${gridHeight}%; flex: 0 0 ${gridWidth}%`;
    // https://medium.com/codex/separating-touch-and-mouse-events-in-your-javascript-games-62181ae949f2
    
    sketchContainer.appendChild(gridSquare);

    // Each pass changes to a random RGB color.
    // The each pass after that adds 10% black. 
    // CSS variables would make changing the CSS properties easier @JensenIsHere TOP
    function whatevs(e) {
      gridSquare.addEventListener('mouseover', calcBgColor);
      function calcBgColor(e) {
        // e.target.style.backgroundColor = 'green';
        e.target.style.backgroundColor = 'rgba(' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ')';
      }
    }
    whatevs();
    rainbowBtn.addEventListener('click', whatevs);
  }

  // 
  // rainbowBtn.addEventListener('click', function (e) {
  //   rainbow.forEach(div => {
  //     div.style.backgroundColor = 'rgba(' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ')';
  //   })
  // });
  // const rainbow = sketchContainer.querySelector('.grid-square');
  const rainbow = sketchContainer.querySelectorAll('.grid-square');
  console.log(rainbow)
  rainbow.forEach(div => {
    // div.style.backgroundColor = 'pink';
  })

}
calcGrid();

// Forgot to credit the source of calcRandNum()  
function calcRandNum(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

// Return random hex color
function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getColor())

// const createDomElement = (element, className, idName, appendTo) => {
//   el = document.createElement(element);
//   el.classList.add(className);
//   el.id = idName;
//   el.textContent = 'Hello, World!';
//   appendTo.insertAdjacentElement('afterend', el);

//   return el
// }
// for (let i = 0; i < 5; i++) {
//   createDomElement('p', 'poopClass', 'poopID', h1MainTitle)
// }

// rgb(0, 112, 184)
// write a function that calcs the new RGB values
// const red = 0 - (0 / 10);
// const green = 112 - (112 / 10); 
// const blue = 184 - (184 / 10);
// console.log(red, green, blue)
// h1MainTitle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

