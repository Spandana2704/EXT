const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/students", studentRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
