
const divContainer = document.querySelector('.sketch-container');
const setGridSize = document.querySelector('.set-grid-size');
let userChoice;
let squaresPerSide;

setGridSize.addEventListener('click', function () {
  userChoice = prompt('How many squares across should the grid be?');
  calcGrid();
});
// setGridSize.addEventListener('click', calcGrid);

// Create the number of grid-items based on user input
// user input = 13
// grid-container = 400px
// 400 / 13 = 30.77px wide
// 13 * 13 = 169 items

// let squaresPerSide = prompt('How many squares down should the grid be?', 60);
// squaresPerSide = Math.floor(Math.random() * 100);
// squaresPerSide = 16;
function calcGrid(squaresPerSide) {

  // userChoice = prompt('How many squares down should the grid be?');
  if (userChoice) {
    squaresPerSide = userChoice;
    console.log('userChoice', userChoice)
  } else squaresPerSide = 16;

  // const gridHeight = Math.floor(400 / squaresPerSide);
  // const gridWidth = Math.floor(400 / squaresPerSide);
  
  const gridArea = Math.pow(squaresPerSide, 2);
  // const gridHeight = Number(500 / squaresPerSide).toFixed(15);
  // const gridWidth = Number(500 / squaresPerSide).toFixed(15);
  const gridHeight = Number(100 / squaresPerSide).toFixed(15);
  const gridWidth = Number(100 / squaresPerSide).toFixed(15);

  for (let i = 0; i < gridArea; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList = 'grid-square';
    gridItem.style.cssText = `height:${gridHeight}%; flex: 0 0 ${gridWidth}%`;
    // gridItem.style.cssText = `height:${gridHeight}px; width:${gridWidth}px`;
    // gridItem.style.cssText = 'width: 20px;height: 20px;border-right: solid .25px black;border-bottom: solid .25px black;';
    divContainer.appendChild(gridItem);
    // console.log('Height: ', gridHeight)
    // console.log('Width: ', gridWidth)
  }
  console.log('gridArea: ', gridArea)
  console.log('squaresPerSide', squaresPerSide)
}
calcGrid()
// area of a square is: square = 20(side 1) * 20(side 2)
// Number of grid-items / square area
// If the side is always 20 (20 * 20 = 400)  
// const randNum = Math.floor(Math.random() * 60);
// console.log('randNum: ', randNum)

// user input = 33
// 400 / 33 = 12px wide
// 33 * 33 = 1089 grid-items at 12.12px square

// user input = 9
// 400 / 9 = 44.44px
// 9 * 9 = 81 grid-items

// user input = 27
// 400 / 27 = 14.814px
// 27 * 27 = 729 grid-items

// user input = 56
// 400 / 56 = 7.14
// 56 * 56 = 3136

// user input = 12
// 600 / 12 = 50
// 12 * 12 = 144

// user input = 17
// 400 / 17 = 23.53
// 17 * 17 = 289