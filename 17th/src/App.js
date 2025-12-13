import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

/* ---------- Initial State ---------- */
const initialState = {
  students: [
    { name: "Varsha", marks: 85 },
    { name: "Anjali", marks: 72 },
    { name: "Rohit", marks: 90 },
    { name: "Kiran", marks: 78 }
  ]
};

/* ---------- Actions ---------- */
const SORT_ASC = "SORT_ASC";
const SORT_DESC = "SORT_DESC";

const sortAsc = () => ({ type: SORT_ASC });
const sortDesc = () => ({ type: SORT_DESC });

/* ---------- Reducer ---------- */
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ASC:
      return {
        ...state,
        students: [...state.students].sort(
          (a, b) => a.marks - b.marks
        )
      };

    case SORT_DESC:
      return {
        ...state,
        students: [...state.students].sort(
          (a, b) => b.marks - a.marks
        )
      };

    default:
      return state;
  }
};

/* ---------- Store ---------- */
const store = createStore(studentReducer);

/* ---------- React Component ---------- */
function StudentList() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Student List (Redux)</h2>

      <button onClick={() => dispatch(sortAsc())}>
        Sort Ascending
      </button>

      <button onClick={() => dispatch(sortDesc())}>
        Sort Descending
      </button>

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

/* ---------- App ---------- */
function App() {
  return (
    <Provider store={store}>
      <StudentList />
    </Provider>
  );
}

export default App;
