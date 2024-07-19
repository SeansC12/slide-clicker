const express = require("express");
var robot = require("robotjs");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  robot.keyTap(req.body.cmd);
  res.json("All ok");
});

app.listen(port, () => {
  console.log(
    `Slide clicker app listening on port ${port}`
  );
});
