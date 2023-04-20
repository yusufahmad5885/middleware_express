const express = require("express");
const app = express();

app.use(express.json());

const checkIfPedro = (req, res, next) => {
  const name = req.body.name;

  if (name === "A") {
    res.json({ error: "no A's allowed" });
  } else {
    next();
  }
};

app.get("/", checkIfPedro, (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/", checkIfPedro, (req, res) => {
  res.send("You logged in");
});

app.listen(3001, () => {
  console.log("Server running");
});
