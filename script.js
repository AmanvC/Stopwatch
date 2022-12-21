let outerDivSeconds = document.querySelector('.clocks-container .container:nth-child(3) .outer');
let outerDivMinutes = document.querySelector('.clocks-container .container:nth-child(2) .outer');
let outerDivHours = document.querySelector('.clocks-container .container:nth-child(1) .outer');

let secondsDeg = 5.9;
let minutesDeg = 0;
let hoursDeg = 0;

let seconds = 0;
let minutes = 0;
let hours = 0;

let secondsDisplay = document.querySelector('p.seconds');
let minutesDisplay = document.querySelector('p.minutes');
let hoursDisplay = document.querySelector('p.hours');

let intervalId;

let isStarted = false;

let startButton = document.querySelector('button.start');
startButton.addEventListener('click', () => {
    if(!isStarted){
        intervalId = setInterval(increaseTimer,1000);
        isStarted = true;
    }
});

let stopButton = document.querySelector('button.stop');
stopButton.addEventListener('click', () => {
    if(isStarted){
        clearInterval(intervalId);
        isStarted = false;
    }
})

let resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    isStarted = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsDeg = 0;
    minutesDeg = 0;
    hoursDeg = 0;
    secondsDisplay.innerHTML = '00';
    minutesDisplay.innerHTML = '00';
    hoursDisplay.innerHTML = '00';
    outerDivSeconds.style.background = `conic-gradient(${color} 0deg ${secondsDeg}deg, transparent ${secondsDeg}deg 360deg)`;
    outerDivMinutes.style.background = `conic-gradient(${color} 0deg ${minutesDeg}deg, transparent ${minutesDeg}deg 360deg)`;
    outerDivHours.style.background = `conic-gradient(${color} 0deg ${hoursDeg}deg, transparent ${hoursDeg}deg 360deg)`;
})

const color = '#D62B83';

function increaseTimer(){
    if(seconds >= 59){
        seconds = -1;
        secondsDeg = -5.9;
        minutes += 1;
        minutesDeg += 5.9;
        if(minutes < 10){
            minutesDisplay.innerHTML = '0' + minutes;
        }else{
            minutesDisplay.innerHTML = minutes;
        }
    }
    if(seconds >= 59 && minutes >= 59){
        minutes = -1;
        minutesDeg = -5.9;
        hoursDeg += 15;
        hours += 1;
        if(hours < 10){
            hoursDisplay.innerHTML = '0' + hours;
        }else{
            hoursDisplay.innerHTML = hours;
        }
    }
    if(seconds >= 59 && minutes >= 59 && hours >= 23){
        clearInterval(intervalId);
        window.alert('Timer Limit reached!!!');
        secondsDeg = -5.9;
        minutesDeg = 0;
        hoursDeg = 0;
        return;
    }
    secondsDeg += 5.9;
    outerDivSeconds.style.background = `conic-gradient(${color} 0deg ${secondsDeg}deg, transparent ${secondsDeg}deg 360deg)`;
    outerDivMinutes.style.background = `conic-gradient(${color} 0deg ${minutesDeg}deg, transparent ${minutesDeg}deg 360deg)`;
    outerDivHours.style.background = `conic-gradient(${color} 0deg ${hoursDeg}deg, transparent ${hoursDeg}deg 360deg)`;
    seconds++;
    if(seconds < 10){
        secondsDisplay.innerHTML = '0'+seconds;
    }else{
        secondsDisplay.innerHTML = seconds;
    }
}