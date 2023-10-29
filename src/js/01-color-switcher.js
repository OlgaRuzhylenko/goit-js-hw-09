const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId;

buttonStart.addEventListener('click', onStartClick);
function onStartClick() {
        this.setAttribute('disabled', 'true')
        intervalId = setInterval(() => {
            const someColor = getRandomHexColor();
            body.style.backgroundColor = someColor
        }, 1000);
    buttonStop.removeAttribute('disabled');
    };

buttonStop.addEventListener('click', onStopClick);
function onStopClick() {
    clearInterval(intervalId);
    this.setAttribute('disabled', 'true')
    buttonStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

