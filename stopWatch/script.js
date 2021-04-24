console.log("Processing")
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let stopBtn = document.getElementById('stop');

//select element also 
let hours = document.getElementById('hours');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');

//initialise the timer
var timer = new easytimer.Timer();

//add event listener to timer 
timer.addEventListener('secondsUpdated', () => {
    const obj = timer.getTimeValues();
    //update the timer on screen
    hours.innerText = obj.hours.toString().padStart(2, '0');
    mins.innerText = obj.minutes.toString().padStart(2, '0');
    secs.innerText = obj.seconds.toString().padStart(2, '0');
})
//making events
startBtn.addEventListener('click', () => {
    timer.start({
        precision: 'seconds'
    })
})
pauseBtn.addEventListener('click', () => {
    timer.pause();
})
stopBtn.addEventListener('click', () => {
    timer.stop();
})