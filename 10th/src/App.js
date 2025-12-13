import React, { useState } from "react";

function App() {
  const students = [
    { name: "Varsha", marks: 85 },
    { name: "Anjali", marks: 78 },
    { name: "Rohit", marks: 90 },
    { name: "Suresh", marks: 72 },
    { name: "Kiran", marks: 88 },
    { name: "Meena", marks: 95 },
    { name: "Amit", marks: 80 }
  ];

  const studentsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = students.slice(
    startIndex,
    startIndex + studentsPerPage
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(students.length / studentsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {currentStudents.map((student, index) => (
          <li key={index}>
            {student.name} - {student.marks}
          </li>
        ))}
      </ul>

      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>

      <button
        onClick={nextPage}
        disabled={
          currentPage === Math.ceil(students.length / studentsPerPage)
        }
      >
        Next
      </button>

      <p>Page {currentPage}</p>
    </div>
  );
}

export default App;
