import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students/marks")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Students from Express Backend</h2>

      <ul>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} - {s.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
