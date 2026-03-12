const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let registrations = [];

app.get("/api/registrations", (req, res) => {
  res.json(registrations);
});

app.post("/api/register", (req, res) => {
  console.log("Received registration:", req.body);

  registrations.push(req.body);

  res.json({ message: "Registration successful" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});