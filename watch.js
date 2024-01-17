// Variables to manage stopwatch state
let timer;
let isRunning = false;
let seconds = 0;
let laps = 1;

// Function to start or pause the stopwatch
function startStopwatch() {
  if (!isRunning) {
    // Start the timer and update button text
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startBtn').innerText = 'Pause';
    isRunning = true;
  } else {
    // Pause the timer and update button text
    clearInterval(timer);
    document.getElementById('startBtn').innerText = 'Resume';
    isRunning = false;
  }
}

// Function to stop the stopwatch
function stopStopwatch() {
  clearInterval(timer);
  document.getElementById('startBtn').innerText = 'Start';
  isRunning = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  document.getElementById('startBtn').innerText = 'Start';
  isRunning = false;
  seconds = 0;
  laps = 1;
  // Reset display and laps list
  document.getElementById('display').innerText = formatTime(seconds);
  document.getElementById('laps').innerHTML = '';
}

// Function to record a lap
function recordLap() {
  if (isRunning) {
    // Create and append a new lap item
    const lapTime = formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${laps++}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}

// Function to update the display with the current stopwatch time
function updateDisplay() {
  seconds++;
  document.getElementById('display').innerText = formatTime(seconds);
}

// Function to format time in HH:MM:SS format
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

// Function to pad single-digit values with a leading zero
function pad(value) {
  return value < 10 ? '0' + value : value;
}
