function generateStudentGrade() {
  const marks = prompt("Enter student marks (between 0 and 100):");
  
  if (marks >= 80) {
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
}

generateStudentGrade();
