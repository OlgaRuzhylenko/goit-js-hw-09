const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId;

stopBtn.disabled = true;
startBtn.addEventListener('click', onStartClick);

function onStartClick(evt) {
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor(); 
    body.style.backgroundColor = randomColor;
  }, 1000);  
  startBtn.disabled = true;
}

stopBtn.addEventListener('click', onStopClick);

function onStopClick(evt) {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

