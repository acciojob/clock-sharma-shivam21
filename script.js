//your JS code here. If required.  function updateTimer() {
      const now = new Date();
      const formattedTime = now.toLocaleString(); // Combines date and time
      document.getElementById('timer').textContent = formattedTime;
    }

    // Initial call to display time immediately on load
    updateTimer();

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);
  function updateTimer() {
      const now = new Date();
      const formattedTime = now.toLocaleString(); // Combines date and time
      document.getElementById('timer').textContent = formattedTime;
    }

    // Initial call to display time immediately on load
    updateTimer();

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);