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
  console.log(req.body);
  robot.keyTap(req.body.cmd);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(
    `Slide clicker app listening on port ${port}`
  );
});
