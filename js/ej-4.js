function updateClock() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDate = now.toLocaleDateString('en-US', options);
  
        const clockElement = document.getElementById('clock');
        clockElement.innerText = formattedDate;
      }
  
      setInterval(updateClock, 1000);
  
      updateClock();
  