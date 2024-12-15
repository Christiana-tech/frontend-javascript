// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "California",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table in the DOM
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    // Add first name cell
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
  
    // Add location cell
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
  
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);
  