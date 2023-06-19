const speedLimit = 70;
const kmPerPoint = 5;

let speed = prompt('Enter speed: ');
speed = parseInt(speed);

if (speed < speedLimit) {
    alert("Ok");
} else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        alert("License suspended");
    } else {
        alert("Points: " + points);
    }
}