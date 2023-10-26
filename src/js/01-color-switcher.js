
const btnStart = document.querySelector(`.js-btnStart`);
const btnStop = btnStart.nextElementSibling;
const body = btnStart.parentElement;

console.dir(btnStart);
console.dir(btnStop);
console.dir(body);

btnStart.addEventListener(`click`, onClick);
btnStop.addEventListener(`click`, offRandomColor);

let timerId = null;

function onClick() {
    timerId = setInterval(randomColor, 1000)
    btnStart.disabled = true;
    btnStop.disabled = false;
};

function randomColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function offRandomColor() {
    clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
