// Function to update the clock
function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Extract hours, minutes, seconds, and AM/PM
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Add leading zeros if needed
  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = seconds.toString().padStart(2, '0');

  // Update the HTML content
  document.getElementById('hours').textContent = hoursStr;
  document.getElementById('Minutes').textContent = minutesStr;
  document.getElementById('Second').textContent = secondsStr;
  document.getElementById('ampm').textContent = ampm;
}

// Call updateClock() every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
