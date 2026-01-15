
const students = [
  { id: 1, name: "Alice", age: 22, courses: ["HTML", "CSS"], active: true, grade: 85 },
  { id: 2, name: "Bob", age: 28, courses: ["JS", "React"], active: false, grade: 92 },
  { id: 3, name: "Charlie", age: 24, courses: ["HTML", "JS"], active: true, grade: 78 },
  { id: 4, name: "Diana", age: 30, courses: ["Node", "Supabase"], active: true, grade: 95 },
  { id: 5, name: "Ethan", age: 19, courses: ["CSS", "Bootstrap"], active: false, grade: 60 },
  { id: 6, name: "Fiona", age: 26, courses: ["JS", "Git"], active: true, grade: 88 }
];
 
// Part 1: .forEach() (Basic Iteration)
console.log("=== PART 1 ===");
// Log Names: Print the name of every student to the console.
const names = [];
students.forEach(student => {
  names.push(student.name);
});
console.log(names);

// Greetings: Log a message for each: "Hello [Name], welcome to review week!".
const greetings = [];
students.forEach(student => {
  greetings.push(`Hello ${student.name}, welcome to review week!`);
});
console.log(greetings);

// Age Check: For each student, log whether they are an adult (18 or older).
const ageCheck = [];
students.forEach(student => {
  const isAdult = student.age >= 18 ? "is an adult." : "is not an adult.";
  ageCheck.push(`${student.name} ${isAdult}`);
});
console.log(ageCheck);

// Grade Alert: Log "Student [Name] has a grade of [Grade]".
const gradeAlerts = [];
students.forEach(student => {
  gradeAlerts.push(`Student ${student.name} has a grade of ${student.grade}.`);
});
console.log(gradeAlerts);

// Count Courses: Use a global variable to count the total number of courses all students are taking combined.
const totalCourseCount = students.reduce((total, student) => total + student.courses.length, 0);
console.log("Total number of courses taken by all students:", totalCourseCount);
// Part 2: .map() (Transformation)
console.log("=== PART 2 ===")
// Uppercase Names: Create a new array with all student names in UPPERCASE.;
const upperCaseNames = students.map(student => student.name.toUpperCase());
console.log(upperCaseNames);

// Summary Strings: Create an array of strings like: "Bob is 28 years old".
const summaryStrings = students.map(student => `${student.name} is ${student.age} years old.`);
console.log(summaryStrings);

// Grade Boost: Create a new array where every student's grade is increased by 5 points.
const gradeBoost = students.map(student => ({...student, grade: student.grade + 5}));
console.table(gradeBoost);

// Total Courses: Create an array that contains the total number of courses each student is taking.
const totalCourses = students.map(student => student.courses.length);
console.log(totalCourses);

// HTML List: Create an array of strings where each name is wrapped in <li> tags (e.g., <li>Alice</li>).
const htmlList = students.map(student => `<li>${student.name}</li>`);
console.log(htmlList);

// Part 3: .filter() (Selection)
console.log("=== PART 3 ===");
// Active Only: Return an array of students where active is true.
const activeStudents = students.filter(student => student.active);
console.table(activeStudents);

// High Achievers: Return students who have a grade higher than 90.
const highAchievers = students.filter(student => student.grade > 90);
console.table(highAchievers);

// Adults: Return students who are 25 years old or older.
const over25 = students.filter(student => student.age >= 25);
console.table(over25);
// JS Fans: Return students who have "JS" included in their courses array.
const jsFans = students.filter(student => student.courses.includes("JS"));
console.table(jsFans);
