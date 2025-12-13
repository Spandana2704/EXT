import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/message")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Express Middleware Demo</h2>
      <p>{msg}</p>
    </div>
  );
}

export default App;
