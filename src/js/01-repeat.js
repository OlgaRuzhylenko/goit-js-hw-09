const startBtn = document.querySelector('[data-start]');
console.log(startBtn);

console.log('hello');




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}