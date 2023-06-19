const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  readline.question('Enter speed: ', speed => {
    speed = parseInt(speed);
  
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", points);
        }
    }
  
    readline.close();
  });  