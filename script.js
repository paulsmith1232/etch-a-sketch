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

  // check for usable number 
  if (num > MAX_SIZE) size = MAX_SIZE
  else if (num < MIN_SIZE) size = MIN_SIZE
  else size = num; 

  console.log(size);

  grid.textContent = '';
  const div = document.createElement('div');
  div.className = "row";


  for(let i = 0; i < size; i++){
    const rowDiv = document.createElement('div');
    rowDiv.className = "row";

    for(let y = 0; y < size; y++){
      rowDiv.innerHTML += '<div class="paint-cell"></div>';
    }
    grid.appendChild(rowDiv);
  }  
  applyPaintEvents();
  return document.querySelector('.grid-container');
}

function changeColour(e) {
  e.target.classList.add('filled');
}

function applyPaintEvents(){
  const paintCells = document.querySelectorAll('.paint-cell');
  for(const cell of paintCells) {
    cell.addEventListener('mouseover', (e) => changeColour(e));
  }
}

resetButton.addEventListener('click', () => createGrid(prompt('Enter a number', 16)));

createGrid();
// applyPaintEvents();






