var express = require('express');
var bodyParser = require('body-parser')
var cookiesparser = require("cookie-parser");
var usermodel = require('./usermodel/userModel');
var app = express();
const port = 5000;
const authRouter = require('./Router/authRouter');
const userRouter = require('./Router/userRouter');
app.use(express.json());
app.use(cookiesparser()); //this is middleware
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.get("/", (req, res) => {
    res.send("Welcome to our homepage")
})


function getUsersbyId(req, res) {
    res.send("getuser functions")
}


app.listen(port, () => {
    console.log("listning on port ==>", port);
})

//creating user
/* async function createUser(){
    let user = {
        name:"kartik",
        email:"kartikn821@gmail.com",
        password:"xyz",
        confirmpassword:"xyz"
    }
    let data = await usermodel.create(user);
    console.log(data);

} */

//createUser(); //calling the function