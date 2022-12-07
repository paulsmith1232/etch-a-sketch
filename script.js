// global variables
const grid = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset-button');

function createGrid(num = 16){
  let size = 0;
  const MAX_SIZE = 100;
  const MIN_SIZE = 1;

  // check for usable argument number 
  if (num > MAX_SIZE) size = MAX_SIZE
  else if (num < MIN_SIZE) size = MIN_SIZE
  else size = num; 

  // reset grid
  grid.textContent = '';

  // construct grid using dual for loops
  for(let i = 0; i < size; i++){
    const rowDiv = document.createElement('div');
    rowDiv.className = "row";

    for(let y = 0; y < size; y++){
      rowDiv.innerHTML += '<div class="paint-cell" data-rgb-value=""></div>';
    }
    grid.appendChild(rowDiv);
  }  

  // add event listeners to paint cells
  applyPaintEvents();
  return document.querySelector('.grid-container');
}
let counter = 0;

// handles changing of paint cell colour
function changeColour(e) {
  const cell = e.target;
  let r = 0;
  let g = 0;
  let b = 0;
  let randomColour = ""

  if(cell.dataset.rgbValue != ""){  // runs if on second or more mouse pass
    darkenCell(cell);
  } else { // runs if first mouse pass
    r = randomInt();
    g = randomInt();
    b = randomInt();
    randomColour = `rgb(${r}, ${g}, ${b})`;
    cell.style.backgroundColor = randomColour;
    
    // stores data on elements for future reference
    cell.dataset.rgbValue = `${r}, ${g}, ${b}`;
    cell.dataset.darkenValues = `${r*.1}, ${g*.1}, ${b*.1}`;
  }
}

// Takes string array and returns array of numbers
function getShadeValues(string){
  let arr = string.split(",");

  //converts strings to numbers
  for(let i = 0; i < arr.length ; i++) arr[i] = Number(arr[i]);
  return arr;
}

// takes paint cell and applies darkened shade to it's background colour
function darkenCell(cell) {
  let shadesArray = getShadeValues(cell.dataset.darkenValues);
  let currentColour = cell.style.backgroundColor;
  let currentColourArray = [];
  let r, g, b = 0;

  currentColour = currentColour.slice(4, -1);
  currentColourArray = getShadeValues(currentColour);
  r = currentColourArray[0] - shadesArray[0];
  g = currentColourArray[1] - shadesArray[1];
  b = currentColourArray[2] - shadesArray[2];   
  cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
}

// Applies event listeners to paint cell elements
function applyPaintEvents(){
  const paintCells = document.querySelectorAll('.paint-cell');
  for(const cell of paintCells) {
    cell.addEventListener('mouseover', (e) => changeColour(e));
  }
}

function randomInt(max = 255) {
  return Math.floor(Math.random()*(max + 1));
}


resetButton.addEventListener('click', () => createGrid(prompt('Enter a number', 16)));
createGrid();






