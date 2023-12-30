let subjectCount = 1;

function addSubject() {
  const subjectsContainer = document.getElementById('subjectsContainer');

  const subjectDiv = document.createElement('div');
  subjectDiv.innerHTML = `
    <label for="subject${subjectCount}">Subject ${subjectCount}:</label>
    <input type="text" id="subject${subjectCount}" placeholder="Enter subject name" required>

    <label for="subject${subjectCount}">Credits ${subjectCount}:</label>
    <input type="text" id="credits${subjectCount}" placeholder="Credits for the given subject" required>

    <label for="marks${subjectCount}">Obtained Marks:</label>
    <input type="number" id="marks${subjectCount}" placeholder="Enter obtained marks" required>
  `;

  subjectsContainer.appendChild(subjectDiv);
  subjectCount++;
}

function calculateCGPA() {
  const resultDiv = document.getElementById('result');

  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 1; i < subjectCount; i++) {
    const subjectName = document.getElementById(`subject${i}`).value;
    const creditSub = parseFloat(document.getElementById(`credits${i}`).value);
    const obtainedMarks = parseFloat(document.getElementById(`marks${i}`).value);

    if (!subjectName || isNaN(obtainedMarks)) {
      resultDiv.innerText = 'Invalid input. Please enter valid values for all subjects.';
      return;
    }

    const credits = creditSub; 
    const gradePoints = calculateGradePoints(obtainedMarks);
    
    totalGradePoints = totalGradePoints + credits * gradePoints;
    totalCredits = totalCredits + credits;
  }

  const cgpa = totalGradePoints / totalCredits;
  resultDiv.innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
}

function calculateGradePoints(marks) {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 40) return 5;
  if (marks >= 30) return 4;
  if (marks >= 20) return 3;
  if (marks >= 10) return 2;
  if (marks >= 0) return 1;
  return 0;
}
