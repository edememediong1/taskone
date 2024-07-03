function updateTimeAndDay() {
    const now = new Date();
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        timeZoneName: 'short'
    };
    const dateOptions = {
        weekday: 'long',
        timeZone: 'UTC'
    };

    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    const dayString = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('current-time').textContent = timeString;
    document.getElementById('current-day').textContent = dayString
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial call to display time and day immediately
updateTimeAndDay();