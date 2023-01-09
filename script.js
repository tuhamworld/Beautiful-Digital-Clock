const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minutes');
const secondEle = document.getElementById('seconds');
const ampmEle = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    // This adss 0 to the time figure if the number is less than 10 for Tuham
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock()