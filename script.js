/*
  generate nXn grid
  take n as input
  for loop based on n
    insert div
*/

let x = 1;
const sketchContainer = document.querySelector('.sketch-container');

function createGrid(num = 16){
  const div = document.createElement('div');
  div.className = "row";

  // sketchContainer.innerHTML +='<div class="row">'
  // for(let i = 0; i < num; i++){
  //   div.innerHTML += '<div class="paint-cell"></div>';
  // }

  for(let i = 0; i < num; i++){
    const rowDiv = document.createElement('div');
    rowDiv.className = "row";

    for(let y = 0; y < num; y++){
      rowDiv.innerHTML += '<div class="paint-cell"></div>';
    }
    sketchContainer.appendChild(rowDiv);
  }


  
}

createGrid(100);