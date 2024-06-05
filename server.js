const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(`Middleware 1: Logging request details`);
  next();
});
app.use((req, res, next) => {
  console.log(`Middleware 2: Performing some operation`);
  next();
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Hello there, ${name} I hear you are ${age} years old!`);
});
app.get("/:itemNumber", (req, res) => {
  console.log(req.params.itemNumber);
  res.send(`<h1>Item ${req.params.itemNumber}</h1>`);
});

app.get("/greet/:name", (req, res) => {
  res.send(`<h2>Hello, ${req.params.name}!`);
});
