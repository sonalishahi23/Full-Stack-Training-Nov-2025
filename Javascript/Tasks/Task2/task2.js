// Student names
let studentNames = ["Sonali", "Anjali", "Rahul", "Priya", "Aman"];

// Marks of 5 subjects for each student
let marks = [
    [85, 90, 78, 92, 88],
    [75, 80, 72, 79, 85],
    [60, 65, 58, 70, 62],
    [95, 92, 90, 96, 94],
    [35, 45, 38, 42, 30]
];


// Arrays to store results
let totalMarks = [];
let averageMarks = [];
let grades = [];
let results = [];


// Display each student's name and total marks
// Calculate average marks for each student
// Assign grade based on average
// Determine Pass or Fail



console.log("===== STUDENT RESULTS =====");

for (let i = 0; i < studentNames.length; i++) {

    let total = 0;

    // Calculate total marks
    for (let j = 0; j < marks[i].length; j++) {
        total = total + marks[i][j];
    }

    totalMarks[i] = total;


    // Calculate average
    let average = total / marks[i].length;

    averageMarks[i] = average;


    // Assign grade
    let grade;

    if (average >= 90) {
        grade = "A";
    }
    else if (average >= 75) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    grades[i] = grade;


    // Check Pass or Fail
    let passed = true;

    for (let j = 0; j < marks[i].length; j++) {

        if (marks[i][j] < 40) {
            passed = false;
        }

    }

    if (passed == true) {
        results[i] = "Passed";
    }
    else {
        results[i] = "Failed";
    }


    // Display student details
    console.log("Name:", studentNames[i]);
    console.log("Total Marks:", totalMarks[i]);
    console.log("Average Marks:", averageMarks[i]);
    console.log("Grade:", grades[i]);
    console.log("Result:", results[i]);
    console.log("-----------------------------");
}



// 5. Find the student with the highest total marks

let highestTotal = totalMarks[0];
let highestStudent = studentNames[0];

for (let i = 1; i < totalMarks.length; i++) {

    if (totalMarks[i] > highestTotal) {
        highestTotal = totalMarks[i];
        highestStudent = studentNames[i];
    }

}

console.log("===== HIGHEST TOTAL MARKS =====");
console.log("Student:", highestStudent);
console.log("Total Marks:", highestTotal);



// 6. Find the student with the lowest total marks


let lowestTotal = totalMarks[0];
let lowestStudent = studentNames[0];

for (let i = 1; i < totalMarks.length; i++) {

    if (totalMarks[i] < lowestTotal) {
        lowestTotal = totalMarks[i];
        lowestStudent = studentNames[i];
    }

}

console.log("===== LOWEST TOTAL MARKS =====");
console.log("Student:", lowestStudent);
console.log("Total Marks:", lowestTotal);



// 7. Calculate the overall average marks of the class

let classTotal = 0;

for (let i = 0; i < totalMarks.length; i++) {
    classTotal = classTotal + totalMarks[i];
}

let totalSubjects = studentNames.length * 5;

let classAverage = classTotal / totalSubjects;

console.log("===== CLASS AVERAGE =====");
console.log("Overall Class Average:", classAverage);

// 8. Count how many students received each grade


let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;
let countF = 0;

for (let i = 0; i < grades.length; i++) {

    if (grades[i] == "A") {
        countA++;
    }
    else if (grades[i] == "B") {
        countB++;
    }
    else if (grades[i] == "C") {
        countC++;
    }
    else if (grades[i] == "D") {
        countD++;
    }
    else {
        countF++;
    }

}

console.log("===== GRADE COUNT =====");
console.log("A Grade:", countA);
console.log("B Grade:", countB);
console.log("C Grade:", countC);
console.log("D Grade:", countD);
console.log("F Grade:", countF);


//9. Display students who scored above class average

console.log("===== STUDENTS ABOVE CLASS AVERAGE =====");

for (let i = 0; i < averageMarks.length; i++) {

    if (averageMarks[i] > classAverage) {
        console.log(studentNames[i]);
    }

}


//  10. Search for a student by name


let searchName = prompt("Enter student name to search:");

let found = false;

for (let i = 0; i < studentNames.length; i++) {

    if (studentNames[i].toLowerCase() == searchName.toLowerCase()) {

        found = true;

        console.log("===== SEARCH RESULT =====");
        console.log("Name:", studentNames[i]);
        console.log("Marks:", marks[i]);
        console.log("Total Marks:", totalMarks[i]);
        console.log("Average Marks:", averageMarks[i]);
        console.log("Grade:", grades[i]);
        console.log("Result:", results[i]);

    }

}

if (found == false) {
    console.log("Student not found.");
}