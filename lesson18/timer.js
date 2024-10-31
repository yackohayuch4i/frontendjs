let countdown = 85;
const timerElement = document.getElementById('timer');

function startTimer(duration) {
    let time = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerElement.textContent = `${minutes}:${seconds}`;

        if (--time < 0) {
            clearInterval(interval);
            timerElement.textContent = '00:00';
        }
    }, 1000);
}

startTimer(countdown);
