

const timeEl = document.getElementById("current-time");

function updateTime() {
    const now = new Date();
    // Get time in UTC
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(now.getUTCMilliseconds()).padStart(3, '0');

    // Format like the screenshot
    timeEl.textContent = `${hours}:${minutes}:${seconds} ${milliseconds}ms`;
}

// Update time immediately and then every 100ms for a smoother clock
updateTime();
setInterval(updateTime, 100);