const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter student marks (0-100): ', marks => {
  marks = parseInt(marks);

  if (marks < 0 || marks > 100) {
      console.log("Invalid marks. Please enter a number between 0 and 100.");
  } else if (marks >= 80) {
      console.log("Grade: A");
  } else if (marks >= 60) {
      console.log("Grade: B");
  } else if (marks >= 50) {
      console.log("Grade: C");
  } else if (marks >= 40) {
      console.log("Grade: D");
  } else {
      console.log("Grade: E");
  }

  readline.close();
});
