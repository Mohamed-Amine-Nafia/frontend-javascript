interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Amine",
  lastName: "Nafia",
  age: 22,
  location: "Laayoune",
};

const student2: Student = {
  firstName: "Ayoub",
  lastName: "Nahili",
  age: 25,
  location: "Casablanca",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

nameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
