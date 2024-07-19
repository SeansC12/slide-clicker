const express = require("express");
var robot = require("robotjs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("clicked");
  robot.keyTap("right");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
