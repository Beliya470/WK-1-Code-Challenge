const speedLimit = 70; // Define the speed limit
const kmPerPoint = 5; // Number of km per demerit point

function checkSpeed() {
  const speedInput = parseInt(document.getElementById('speed').value); // Get the input speed from the user
  const speed = isNaN(speedInput) ? 0 : speedInput; // Validate the input and handle NaN values

  if (speed < speedLimit) {
    document.getElementById('speedOutput').textContent = 'Ok'; // Print "Ok" if speed is less than the limit
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint); // Calculate the demerit points
    if (points >= 12) {
      document.getElementById('speedOutput').textContent = 'License suspended'; // Print "License suspended" if points exceed 12
    } else {
      document.getElementById('speedOutput').textContent = `Points: ${points}`; // Print the number of points
    }
  }
}
