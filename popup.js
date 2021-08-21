document.getElementById("startTimer").addEventListener("click", startTimer);

function startTimer() {
    let hours = Number(document.getElementById("hoursInput").value);
    let minutes = Number(document.getElementById("minutesInput").value);
    let seconds = Number(document.getElementById("secondsInput").value);
    let totalTimeMin = hours*60 + minutes + seconds/60;
    let totalTimeMs = hours*3600000 + minutes*60000 + seconds*1000;
    const now = new Date().valueOf();
    let timeWhen = now + totalTimeMs;
    chrome.alarms.create("PopupAlarm", {delayInMinutes: totalTimeMin});
    chrome.storage.sync.set({"time": timeWhen});
    getTime()
}

function getTime() {
    chrome.storage.sync.get(['time'], function(result) {
        const now = new Date().valueOf();
        let hours = document.getElementById("hoursSpan");
        let minutes = document.getElementById("minutesSpan");
        let seconds = document.getElementById("secondsSpan")
        let timeUntil = result.time - now;
        if (timeUntil <= 0) {
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00'
        }
        else {

            h = (Math.floor(timeUntil/3600000));
            timeUntil = timeUntil - h*3600000;
            m = Math.floor(timeUntil/60000);
            timeUntil = timeUntil - m*60000
            s = Math.floor(timeUntil/1000)
            hours.innerText = String(h);
            if (m < 10) {
                minutes.innerText = `0${m}`
            }
            else {
                minutes.innerText = String(m)
            }
            if (s < 10) {
                seconds.innerText = `0${s}`
            }
            else {
                seconds.innerText = String(s)
            }
        }
    })
}

getTime();
setInterval(getTime,1000)