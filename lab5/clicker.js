const startButton = document.getElementById('start-button');
let score = 0;
let timerId;
let randomX = Math.floor(Math.random() * 18);
let randomY = Math.floor(Math.random() * 10);
let elapsedTimeInSeconds = 0; // змінна для відстеження пройденого часу в секундах
let remainingTimeInSeconds = Math.floor((level/1000) % 60); 

console.log(startButton);
// Add a click event listener to the start button
startButton.addEventListener('click', () => {
  const body = document.body;
  const level = document.getElementById('level').value;
  const color = document.getElementById('color').value;


  if (level === '--Please choose an option--' || color === '--Please choose an option--') return

  let min;

  if (level === '1000') {
    min = 5;
  }
  else if (level === '2000') {
    min = 10;
  }
  else {
    min = 18;
  }

  let remainingTimeInSeconds = Math.floor((level/1000) % 60); 

  function startTimer() {
    timerId = setInterval(() => {
        remainingTimeInSeconds--; 
        updateTimerDisplay();
        if (remainingTimeInSeconds === 0) {
            clearInterval(timerId);
            showGameOverMessage();
        }
      }, level);
    }

  function resetTimer() {
    clearInterval(timerId);
    remainingTimeInSeconds = Math.floor((level/1000) % 60);
    updateTimerDisplay();
    startTimer();
  }

  function updateTimerDisplay() {
    const seconds = remainingTimeInSeconds.toString();
    const timeString = ${seconds};
    scoreLabel.textContent = Score: ${score} time left for click: ${timeString};
  }

  function showGameOverMessage() {
    alert(Game over! Your score: ${score}. Congratulation!);
    window.location.reload();
  }

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  body.style.width = ${window.innerWidth}px;
  body.style.height = ${window.innerHeight}px;
  body.style.backgroundColor = 'white';

  const scoreLabel = document.createElement('p');
  sec = Math.floor((level/1000) % 60);
  scoreLabel.textContent = Score: ${score} time left for click: ${sec};
  scoreLabel.style.position = 'absolute';
  scoreLabel.style.top = '10px';
  scoreLabel.style.left = '10px';
  scoreLabel.style.color = 'black'; // Set text color to white for better visibility
  body.appendChild(scoreLabel);
  // Set the background color of the body to a random color

  // Calculate the width and height of each square
  const squareSize = Math.min(window.innerWidth, window.innerHeight) / 10;
  
  // Create the squares and add them to the body
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 10; j++) {
      const square = document.createElement('div');
      square.style.width = ${squareSize}px;
      square.style.height = ${squareSize}px;
      square.style.position = 'absolute';
      square.id = ${i}x${j};
      // square.style.backgroundColor = #${Math.floor(Math.random()*16777215).toString(16)};
      square.style.left = ${i * squareSize}px;
      square.style.top = ${j * squareSize}px;
      square.addEventListener('click', () => {
        if (square.style.backgroundColor == color) {
          square.style.backgroundColor = 'white';
          score++;
          scoreLabel.textContent = Score: ${score} time left for click: ${level} milliseconds;
          resetTimer();
          paintRandomSquare();
        }
      });
      body.appendChild(square);
    }
  }

  paintRandomSquare();
  startTimer();

  function paintRandomSquare() {
    lowLimitX = randomX - min < 0 ? 0 : randomX - min;
    lowLimitY = randomY - min < 0 ? 0 : randomY - min;
    maxLimitX = randomX + min > 18 ? 18 : randomX + min;
    maxLimitY = randomY + min > 10 ? 10 : randomY + min;
    randomX = Math.floor(Math.random() * (maxLimitX - lowLimitX)) + lowLimitX;
    randomY = Math.floor(Math.random() * (maxLimitY - lowLimitY)) + lowLimitY;

    console.log(${randomX}x${randomY});
    const randomSquare = document.getElementById(${randomX}x${randomY});
    randomSquare.style.backgroundColor = color;
  }

  // Remove overflow on the body
  body.style.overflow = 'hidden';
});
