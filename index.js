
const timeEl = document.getElementById("current-time");
timeEl.textContent = Date.now();

setInterval(() => {
    timeEl.textContent = Date.now();
}, 1000);