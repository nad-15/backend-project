const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false})) //make req.body works
app.use(express.static("public"));

app.use(function(req, res, next){
    res.locals.errors = [];
    next();
});

app.get("/", (req, res) => {
    res.render("homepage");
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/register", (req, res)=> {
    const errors = [];

    if(typeof req.body.username !== "string") req.body.username = "" ;
    if(typeof req.body.password !== "string") req.body.password = "" ;

    req.body.username = req.body.username.trim();

    if(!req.body.username) errors.push("You must provide a username") ;
    if(req.body.username && req.body.username.length < 3) errors.push("Username must be at least 3 characters.") ;
    if(req.body.username && req.body.username.length > 10) errors.push("Username cannot exceed 10 characters") ;
    if(req.body.username  && !req.body.username.match(/^[a-zA-Z0-9]+$/)) errors.push("Username can only contains letters and numbers.") ;

    if(!req.body.password) errors.push("You must provide a password") ;
    if(req.body.password && req.body.password.length < 12) errors.push("Password must be at least 12 characters.") ;
    if(req.body.password && req.body.password.length > 70) errors.push("Password cannot exceed 70 characters") ;

    if(errors.length){
        return res.render("homepage", {errors})
    }
    
    //save the new user into a database
    res.send("Thank you for filling out the form.")

    //give the user a cookie


});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

