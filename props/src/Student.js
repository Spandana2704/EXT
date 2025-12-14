import React from "react";

function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Marks: {props.marks}</p>
      <hr />
    </div>
  );
}

export default Student;
