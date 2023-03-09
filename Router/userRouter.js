var express = require('express');
var app = express();
const userRouter = express.Router();
const usermodel = require('../usermodel/userModel');
const jsonwebtoken = require('jsonwebtoken');
const {
    reset
} = require('nodemon');
const jwtKey = 'asdrfhakl;sdhj' // this is any random key
userRouter.route("/").get(beforegettinguserJWT, getUsers).post(postUsers).patch(updateUsers);
//userRouter.route('/:id').patch(updateUserbyid).delete(deleteuserbyid);
//userRouter.route('').get(getAllusers); // consider this to be used only by admin
userRouter.route("/:id").patch(updateUserId).delete(userDelete);

//userRouter.route('/userLogin').get(userLogin);
userRouter.route('/getalluser').get(getAllusers);


//forgot password Functionality 
userRouter.route('/forget').post(forgetPassword);
userRouter.route('/resetpassword/:token').post(resetPassword);

async function forgetPassword(req, res) {
    /*get email from user
        1.Check if user is email is there or not
        2. check otp
        3. if yes then update password
        4. take password and confirm password from user and update in db 
    */
    try {
        let dataobj = req.body;

        let email = dataobj.email;
        let user = await usermodel.findOne({
            email
        });

        const resetToken = user.createResetToken();
        let resetLink = `http://localhost:5000/user/resetpassword/${resetToken}`;
        if (!user) {
            res.json({
                "msg": "NO such email exist"
            })
        } else {
            //Reset password logic comes here
            // we will send email to user here
        }
    } catch (e) {
        res.json({
            "Error": e
        })
    }

}
async function resetPassword(req, res) {
    // after user clicks on link to reset password 
    try{
    let token = req.params.token; // this token is coming from use schema from forget password link
    // fiding user based on the token we received because token is associated with the user schema
    let {
        password,
        confirmpassword
    } = req.body; // extract values from req.body
    const user = await usermodel.findOne({
        resetToken: token
    })
    user.resetPasswordhandler = ({
        password,confirmpassword
    })
    await user.save();
    res.json({
        "msg": "password updated"
    }) }catch(e){
        res.json({
            "Error":err.message
        })
    }
}


//get all users function but make sure guy is admin
async function getAllusers(req, res) {
    try {
        let user = await usermodel.find();
        res.json({
            "msg": "user retrieved",
            data: user
        })
    } catch (e) {
        res.json({
            "error": "Error Encountered"
        })
    }
}
// deleting the user
async function userDelete(req, res) {
    try {
        let id = req.params.id;
        let user = await usermodel.findByIdAndDelete(id);
    } catch (e) {
        res.json({
            message: "Error in user delete"
        })
        console.log("Error", e)
    }
}

// this is for gett user method aka user login 
/* async function userLogin(req, res) {
    try{

    
    let id = req.params.email;

    var user = await usermodel.findById({
        id
    });
    if (user) {
        res.json({
            "msg": "login success"
        })
    } else {
        console.log("user not found")
    } } catch(e){
        console.log("some error in login ",e)
    } }*/



// for updating the user
async function updateUserId(req, res) {
    try {
        let id = req.params.id;
        let datatoupdate = req.body;
        let user = await usermodel.find(id);

        if (user) {
            const keys = [];
            for (let key in datatoupdate) {
                keys.push(key);
            }
            for (let i = 0; i < keys.length; i++) {
                user[keys[i]] = datatoupdate[keys[i]]
            }
            const updateddata = await user.save()
            res.json({
                "msg": "Data updated"
            })
        } else {
            res.json({
                "msg": "Data not updated"
            })
        }
    } catch (e) {
        res.json({
            error: "We encountered an error Please try again"
        })
        console.log("Error in update", e);
    }

}



async function getUsersbyId(req, res) {
    let email = req.params.email;
    console.log(email)
    try {
        let user = await usermodel.findOne({
            email
        });
        if (user) {
            console.log("Data Found with the email id", user)
        } else {
            console.log("No such user found")
        }
    } catch (e) {
        console.log("Encountered a error", e)
    }
}

function deleteuserbyid(req, res) {

}
// use this function if need to authenticate using Cookies
function beforegettinguser(req, res, next) {
    // this is middleware it will make sure if user is logged in before executing 
    if (req.cookies.isloggedin) {
        next();
    } else {
        res.json({
            "msg": "Operation not permitted"
        })
    }
    console.log("Operation not permitted")
}

// Middleware function to authenticate using JWT
function beforegettinguserJWT(req, res, next) {
    if (req.cookies.isloggedin) {
        let isverfied = jsonwebtoken.verify(req.cookies.isloggedin, jwtKey);
        if (isverfied) {
            next();
        }
    } else {
        res.json({
            "msg": "Operation not permitted JWT"
        })
    }
    console.log("Operation not permitted JWT")
}


//here we sent patch request to update the name, where given email is found
async function updateUsers(req, res) {
    var datatoupdate = req.body;
    var data = await usermodel.findOneAndUpdate({
        email: "jatta@gmail.com"
    }, datatoupdate);
    console.log("udpated email", data);
    res.json({
        "msg": "Success"
    })
}

async function getUsers(req, res) {
    //this function will call on localhost:5000/user/
    //res.send("getuser functions")
    let allUsers = await usermodel.find();
    console.log(allUsers);

}


function postUsers(req, res) {
    res.send("getuser functions")
}


//




module.exports = userRouter;