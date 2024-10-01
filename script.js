function updateDateTime() {
    const now = new Date();
    const dateTimeStr = now.toLocaleString();
    document.getElementById('date-time').textContent = dateTimeStr;
}

setInterval(updateDateTime, 1000);
updateDateTime();