function generateGrade() {
    const marksInput = parseInt(document.getElementById('marks').value); // Get the input marks from the user
    const marks = isNaN(marksInput) ? 0 : marksInput; // Validate the input and handle NaN values
  
    let grade = '';
    if (marks < 0 || marks > 100) {
      grade = 'Invalid marks. Please enter a number between 0 and 100.'; // Check if the marks are valid
    } else if (marks >= 80) {
      grade = 'Grade: A'; // Assign grade A for marks greater than or equal to 80
    } else if (marks >= 60) {
      grade = 'Grade: B'; // Assign grade B for marks greater than or equal to 60
    } else if (marks >= 50) {
      grade = 'Grade: C'; // Assign grade C for marks greater than or equal to 50
    } else if (marks >= 40) {
      grade = 'Grade: D'; // Assign grade D for marks greater than or equal to 40
    } else {
      grade = 'Grade: E'; // Assign grade E for marks less than 40
    }
  
    document.getElementById('gradeOutput').textContent = grade; // Display the grade
  }
  