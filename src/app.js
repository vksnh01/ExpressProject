require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//const PORT = process.env.PORT||8080;
const PORT =8080;

const publicPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templete/partials");
const viewsPath = path.join(__dirname, "../templete/Views");

app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.listen(PORT, () => {
  console.log(`Server start on port no ${PORT}`);
});
