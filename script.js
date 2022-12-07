/*
  generate nXn grid
  take n as input
  for loop based on n
    insert div
*/

let x = 1;
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

function changeColour(e) {
  const cell = e.target;
  let r = randomInt();
  let g = randomInt();
  let b = randomInt();
  let randomColour = ""

  if(cell.dataset.rgbValue != ""){
    let colour = cell.style.backgroundColor;
  
    let shadesArray = getShadeValues(cell.dataset.darkenValues);
    let currentColour = cell.style.backgroundColor;
    currentColour = currentColour.slice(4, -1);
    currentColour = getShadeValues(currentColour);
    r = currentColour[0] - shadesArray[0];
    g = currentColour[1] - shadesArray[1];
    b = currentColour[2] - shadesArray[2];
    
    randomColour = `rgb(${r}, ${g}, ${b})`;
    cell.style.backgroundColor = randomColour;

  } else {
    r = randomInt();
    g = randomInt();
    b = randomInt();
    cell.classList.add('filled');
    randomColour = `rgb(${r}, ${g}, ${b})`;
    cell.style.backgroundColor = randomColour;
    cell.dataset.rgbValue = `${r}, ${g}, ${b}`;
    cell.dataset.darkenValues = `${r*.1}, ${g*.1}, ${b*.1}`;
  }
}

function getShadeValues(string){
  let arr = string.split(",");

  //converts strings to numbers
  for(let i = 0; i < arr.length ; i++) arr[i] = Number(arr[i]);

  //converts numbers to 1/10 their value
  // for(let i = 0; i < arr.length ; i++) arr[i] = arr[i] * 0.1;


  return arr;
}

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
// applyPaintEvents();






