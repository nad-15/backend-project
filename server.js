const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("homepage")
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/register", (req, res)=> {
    
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

