var express = require('express');
const usermodel = require('../usermodel/userModel');
var app = express();
const jwt = require('jsonwebtoken');
const jwtKey = 'asdrfhakl;sdhj' // this is any random key

const authRouter = express.Router();

authRouter.route("/getCookies").get(getCookies);
authRouter.route("/setCookies").get(setCookies);
authRouter.route("/signup").get(getSignup).post(postSignup);
authRouter.route("/login").post(userLogin);

// Login functionality

async function userLogin(req, res) {
    let dataObj = req.body;
    let email = dataObj.email;
    let useremail = await usermodel.findOne({
        email
    }) // return true or false
    try {
        if (useremail) {
            if (dataObj.password == useremail.password) {
                // Set the cookie to make sure if user is logged in or not
                res.cookie('userLogin',true);
                // We can also validate using cookie but we will use JWT here
                let uid = useremail['_id']; // id is coming from mongose db

                let jwtsign = jwt.sign({
                    payload: uid
                }, jwtKey)
                console.log(jwtsign);
                let token = req.cookies.userLogin;
                let payload = jwt.verify(token, jwtKey);
                const user = await usermodel.findById(
                    payload.payload

                )
                console.log("user detail afte login", user);
                res.cookie('isloggedin', jwtsign);
                res.json({
                    "msg": "login Success Full"
                })
            } else {
                res.json({
                    "msg": "invalid Password please try again"
                })
            }
        } else {
            res.json({
                "msg": "No Such Email Exist"
            })
        }
    } catch (e) {
        res.json({
            "error": e
        })
    }

}

function postUserLogin(req, res) {
    res.send("post user login");
}

// Cookies Function 
function setCookies(req, res) {
    //res.setHeader('Set-Cookie','isLoggedin=true')
    // Now setting the cookie using cookie parser method
    res.cookie('isLoggedin', "flase", {
        httpOnly: true
    }); // we made it to false as it was made it to true
    res.send("cookies has been set")
}

function getCookies(req, res) {
    var cookies = req.cookies;
    console.log(cookies);
}

async function postSignup(req, res) {
    try {
        var dataobj = req.body;
        console.log(dataobj);
        var data = await usermodel.create(dataobj);
        console.log("data has been received", data)
        console.log("post methodd called")
        res.json({
            "msg": "ok"
        })
    } catch (e) {
        res.json({
            msg: "Something went wrong in signup method",
            errmsg: e
        })
    }
}

function getSignup(req, res) {
    res.sendFile('../views/signup.html', {
        root: __dirname
    })
}
module.exports = authRouter;