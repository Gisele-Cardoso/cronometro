let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 1000);
        running = true;
    }
});

stopButton.addEventListener('click', () => {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    running = false;
    display.textContent = '00:00:00';
});

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    display.textContent = hours + ":" + minutes + ":" + seconds;
}
