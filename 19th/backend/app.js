const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

/* ---------- Custom Middleware ---------- */
const loggerMiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next();
};

app.use(loggerMiddleware);

/* ---------- Route ---------- */
app.get("/message", (req, res) => {
  res.json({ message: "Middleware executed successfully" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
