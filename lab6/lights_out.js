
const board = document.getElementById('board');
const gridSize = 5;

let varSchema = 1;
let dataGoal;
let elapsedTimeInSeconds = 0;
var steps = document.getElementById('steps');
const timeElement = document.getElementById('time');
let isNewGame = false;

async function initializeBoardFromAPI() {
  try {
    const response = await fetch('https://sofianykdasha.github.io/js/var1.json');
    const data = await response.json();
    let schema;
    if(varSchema == 1) {
      schema = data.first.schema;
      dataGoal = data.first.min_steps_to_win;
      varSchema = 2;
    } else if (varSchema == 2) {
      schema = data.second.schema;
      dataGoal = data.second.min_steps_to_win;
      varSchema = 3
    } else if (varSchema == 3){
      schema = data.third.schema;
      dataGoal = data.third.min_steps_to_win;
      varSchema = 1;
    }

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.querySelector(`.cell[data-row='${i}'][data-col='${j}']`);

        if (schema[i][j] == 1) {
          cell.classList.add('on');
        } else {
          cell.classList.remove('on');
        }

        if (!isNewGame) {
          cell.addEventListener('click', function (e) {
            const row = parseInt(this.dataset.row);
            const col = parseInt(this.dataset.col);
            
            steps.textContent = parseInt(steps.textContent) + 1;
            toggleLight(i, j);
            checkWin();
          });
        } else {
          steps.textContent = 0;
        }
      }
    }

    const goal = document.getElementById('goal');
    goal.textContent = dataGoal;

    const timeElement = document.getElementById('time');
    timeElement.textContent = '00:00';
    elapsedTimeInSeconds = 0;
    isNewGame = true;
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
} 

function toggleLight(row, col) {
  toggleAdjacentLight(row, col);

  if (row > 0) toggleAdjacentLight(row - 1, col);
  if (row < gridSize - 1) toggleAdjacentLight(row + 1, col);
  if (col > 0) toggleAdjacentLight(row, col - 1);
  if (col < gridSize - 1) toggleAdjacentLight(row, col + 1);
}

function toggleAdjacentLight(row, col) {
  const cell = document.querySelector(`.cell[data-row='${row}'][data-col='${col}']`);
  cell.classList.toggle('on');
}

function checkWin() {
  if (document.querySelectorAll('div.on').length === 0) {
    alert('Ну шо! Ти виграв!');
    window.location.reload
  }
}

initializeBoardFromAPI();

function updateTimer() {
  elapsedTimeInSeconds++;
  const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (elapsedTimeInSeconds % 60).toString().padStart(2, '0');
  const timeString = `${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

setInterval(updateTimer, 1000);
