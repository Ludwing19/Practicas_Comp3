var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("express - Programacion Computacional IV");
});

app.listen(3000, function () {
  console.log("Ejecutando");
});
