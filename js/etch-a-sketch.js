// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// // filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
// }

// Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }
const divContainer = document.querySelector('.sketch-container');

// Create the number of grid-items based on user input
// user input = 13
// grid-container = 400px
// 400 / 13 = 30.77px wide
// 13 * 13 = 169 items

let squaresPerSide = prompt('How many squares down should the grid be?', 60);

function calcGrid(squaresPerSide) {

  const gridArea = Math.pow(squaresPerSide, 2);
  const gridHeight = Math.floor(400 / squaresPerSide);
  const gridWidth = Math.floor(400 / squaresPerSide);

  for (let i = 0; i < gridArea; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList = 'grid-square';
    gridItem.style.cssText = `height:${gridHeight}px; width:${gridWidth}px`;
    // gridItem.style.cssText = 'width: 20px;height: 20px;border-right: solid .25px black;border-bottom: solid .25px black;';
    divContainer.appendChild(gridItem);
  }
  console.log(gridArea)
  console.log(typeof gridHeight, gridWidth)
}
calcGrid(squaresPerSide)
// area of a square is: square = 20(side 1) * 20(side 2)
// So I'd use division to calc the size of each square?
// Number of grid-items / square area?
// If the side is always 20 (20 * 20 = 400)  
// const randNum = Math.floor(Math.random() * 60);
// console.log(randNum)

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