
const sketchContainerWrap = document.querySelector('.sketch-container-wrapper');
const setGridSizeBtn = document.querySelector('.set-grid-size');  
// const rainbowBtn = document.querySelector('.bg-rainbow');
let userChoice;


// const rainbowGridSquares = sketchContainerWrap.children;
// console.log(Array.from(rainbowGridSquares));
// console.log(rainbowGridSquares)
// console.log(rainbowGridSquares.length)
// console.log(rainbowGridSquares[0])
// const rainbowGridSquares = sketchContainerWrap.childNodes;
// for (let i = 0; i < rainbowGridSquares.length; i++) {
//   console.log(rainbowGridSquares[i].nextSibling) // null 
//   console.log(rainbowGridSquares[i].childNodes) // empty nodeList[] ?? 
//   console.log('lastChild', rainbowGridSquares[i].lastChild) // null
// }
// console.log('rainbowGridSquares: ', rainbowGridSquares)
// console.log('rainbowGridSquares length: ', rainbowGridSquares.length)
// console.log('nextSibling ', rainbowGridSquares[0].nextSibling) // null
// console.log('nextSibling ', rainbowGridSquares.nextSibling) // null
// console.log('lastChild ', rainbowGridSquares[0].lastChild) // null
// console.log('childNodes ', rainbowGridSquares[0].childNodes) // null

// for (const entry of rainbowGridSquares.entries()) {
//   console.log('sketch container wrap\'s childNodes', entry)
// }


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


  
  for (let i = 0; i < gridArea; i++) {
    gridSquare = document.createElement('div');
    gridSquare.classList = 'grid-square';
    
    gridSquare.style.cssText = `height:${gridHeight}%; flex: 0 0 ${gridWidth}%`;

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = 'yellow';
    
    sketchContainer.appendChild(gridSquare);
    // console.log('Height: ', gridHeight)
    // console.log('Width: ', gridWidth)

    gridSquare.addEventListener('mouseover', function (e) {
      // Each pass changes to a random RGB color. 
      // The each pass after that adds 10% black. 
      e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
      console.log(red, green, blue)
    }); 

    // rainbowBtn.addEventListener('click', function (e) {
    //   // I need reference to all the gridSquares so I can change their color. 
    //   gridSquare.toggleAttribute('red')
    //   console.log(gridSquare)
    // });
  }
  // console.log('squaresPerSide', squaresPerSide)
  // console.log('gridArea: ', gridArea)
}
calcGrid()
