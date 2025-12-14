import React from "react";
import Student from "./Student";

function App() {
  return (
    <div>
      <h2>Props Example</h2>
      <Student name="Varsha" marks={85} />
      <Student name="Anjali" marks={72} />
    </div>
  );
}

export default App;
