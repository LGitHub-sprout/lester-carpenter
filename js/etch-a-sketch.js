
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

  // const rainbowBtn = document.querySelector('.bg-rainbow')

  for (let i = 0; i < gridArea; i++) {
    gridSquare = document.createElement('div');
    gridSquare.classList = 'grid-square';

    gridSquare.style.cssText = `height:${gridHeight}%; flex: 0 0 ${gridWidth}%`;
    // https://medium.com/codex/separating-touch-and-mouse-events-in-your-javascript-games-62181ae949f2
    
    sketchContainer.appendChild(gridSquare);

    // Each pass changes to a random RGB color.
    // The each pass after that adds 10% black. 
    gridSquare.addEventListener('mouseover', calcBgColor);
    function calcBgColor(e) {
      e.target.style.backgroundColor = 'rgba(' + calcRandNum(0, 256) + ', ' + calcRandNum(0, 256) + ', ' + calcRandNum(0, 256) + ')';
    }
  }
}
calcGrid();

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

// const multi = function(array);
function multi(array) {
  console.log(array)
}
const someArray = [1, 3, 5];

console.log(multi(someArray));
