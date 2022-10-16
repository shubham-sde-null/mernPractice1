const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = 3000;
const newViewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", newViewsPath);
hbs.registerPartials(partialPath);
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => {
    res.render("index", {
        name: req.query.name,
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));