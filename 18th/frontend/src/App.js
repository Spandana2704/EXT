import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [names, setNames] = useState([]);
  const [userMsg, setUserMsg] = useState("");
  const [profileMsg, setProfileMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/students/marks")
      .then(res => res.json())
      .then(data => setStudents(data));

    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setNames(data));

    fetch("http://localhost:5000/users")
      .then(res => res.text())
      .then(data => setUserMsg(data));

    fetch("http://localhost:5000/users/profile")
      .then(res => res.text())
      .then(data => setProfileMsg(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students (Marks)</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>{s.name} - {s.marks}</li>
        ))}
      </ul>

      <h2>Student Names</h2>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <h2>User Route</h2>
      <p>{userMsg}</p>

      <h2>User Profile Route</h2>
      <p>{profileMsg}</p>
    </div>
  );
}

export default App;
