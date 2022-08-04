
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

    function changeBg() {
      gridSquare.addEventListener('mouseover', calcBgColor);
      function calcBgColor(e) {
        // e.target.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
        // e.target.style.backgroundColor = 'green';
        // e.target.style.backgroundColor = 'rgba(' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ')';
        // e.target.style.backgroundColor = 'purple';
        
        // console.log(color[0]) // not defined
        // console.log(red) // works bc it's already initialized above!!
        // console.log('red', colorVals[0], 'green', colorVals[1], 'blue', colorVals[2])
        // console.log(e.target.style.cssText)
        calcRandNum2(0, 255);
        e.target.style.backgroundColor = 'rgb(' + colorVals[0] + ', ' + colorVals[1] + ', ' + colorVals[2] + ')'; 
        // console.log('colorVals red', colorVals[0], 'colorVals green', colorVals[1], 'colorVals blue', colorVals[2])
      }
      // gridSquare.addEventListener('mouseover', whatever);
      // console.log(red, green, blue)
    }
    changeBg();

    // let red   = Math.floor(Math.random() * 255);
    // let green = Math.floor(Math.random() * 255);
    // let blue = Math.floor(Math.random() * 255);
    calcRandNum2(0, 255);
    // console.log('colorVals red', colorVals[0], 'colorVals green', colorVals[1], 'colorVals blue', colorVals[2])
    let red = colorVals[0];
    let green = colorVals[1];
    let blue = colorVals[2];
    // console.log('colorVals red', red, 'colorVals green', green, 'colorVals blue', blue)
    // console.log('colorVals red', colorVals[0] / 10)
    let tenPercentRed = red / 10;
    let tenPercentGreen = green / 10;
    let tenPercentBlue = blue / 10;
    // // console.log('tenPercentRed', tenPercentRed)
    gridSquare.addEventListener('mouseover', function (e) {
      // Wasn't working bc perhaps colorVals[#] can be used in ${var} notation?
      e.target.style.backgroundColor = `rgb(${red -= tenPercentRed}, ${green -= tenPercentGreen}, ${blue -= tenPercentBlue})`;
    })
    
    // Overrides previous event.
    // gridSquare.addEventListener('mouseover', function (e) {
    //   e.target.style.backgroundColor = 'purple';
    // })
  }
  /*
    Needs to change div style on MouseOver, not click.
  // rainbowBtn.addEventListener('click', function (e) {
  //   rainbow.forEach(div => {
  //     div.style.backgroundColor = 'rgba(' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ', ' + calcRandNum(0, 255) + ')';
  //   })
  // });
  // const rainbow = sketchContainer.querySelector('.grid-square');
  const rainbow = sketchContainer.querySelectorAll('.grid-square');
  // console.log(rainbow)
  // rainbow.forEach(div => {
    // div.style.backgroundColor = 'pink';
  // })
  */
}
calcGrid();

// let red = Math.floor(Math.random() * 255);
// let green = Math.floor(Math.random() * 255);
// let blue  = Math.floor(Math.random() * 255);

// console.log('red', red);
// console.log('green', green);
// console.log('blue', blue)
// const tenPercentRed = red / 10;
// const tenPercentGreen = green / 10;
// const tenPercentBlue = blue / 10;
// console.log('10% red', tenPercentRed)
// console.log('10% green', tenPercentGreen)
// console.log('10% blue', tenPercentBlue)
// red = red - tenPercentRed;
// red -= tenPercentRed;
// const rainbowBtn2 = document.querySelector('.bg-rainbow');
// rainbowBtn2.addEventListener('click', (e) => {
//   // e.target.style.backgroundColor = `${red} -= ${tenPercentRed}`;
//   e.target.style.backgroundColor = `rgb(${red -= tenPercentRed}, ${green -= tenPercentGreen}, ${blue -= tenPercentBlue})`;
  // console.log('new red', red)
  // console.log('new green', green);
  // console.log('new blue', blue)
//   console.log('10% red', tenPercentRed)
//   console.log('10% green', tenPercentGreen)
//   console.log('10% blue', tenPercentBlue)
// })

// Forgot to credit the source of calcRandNum()  
function calcRandNum(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};
// const colors = ['red', 'green', 'blue'];
function calcRandNum2(min, max) {
  const randNum = Math.ceil(Math.random() * 25);
  colorVals = [];
  const colors = ['red', 'green', 'blue'];
  colors.forEach((color) => {
    color = Math.floor(Math.random() * (max - min) + randNum);
    if (color > 255) color -= (randNum * 2);
    colorVals.push(color);
  })
}

for (let i = 0; i < 3; i++) {
  let color = Math.floor(Math.random() * 255);
  // console.log('color', color)
  // console.log(i);
}

// Return random hex color
function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// console.log(getColor())

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
