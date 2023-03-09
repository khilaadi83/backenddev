// connecting with mongoose db
const mongoose = require("mongoose");
const crypto = require("crypto");
const {
    scryptSync,
    randomBytes
} = require("crypto");

const db_link = 'mongodb+srv://kartikn821:J0vkkwQcBdsMu10d@cluster0.psuupqw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_link).then(function (db) {
        console.log("conntected");
    }

).catch(function (err) {
    console.log("some error", err);
})

// database schmea
let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    confirmpassword: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        enum: ['admin', 'user', 'delieveryboy', 'owner'],
        default: 'user'
    },
    profileimage: {
            type:String,
            default:'img/user/default.png'
    },
    resetToken:{
        type:String
    }

})



// Hooks
// If we want to perform any activity before saving the data we go with hooks
userSchema.pre('save', function () {

    console.log("Pre schema")
})
userSchema.post('save', function (doc) {

    console.log("post schema- data saved in db", doc)
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

// attaching methods to user schemaa
userSchema.methods.createResetToken = function(){
    // crypto package create unique token
    let resetToken  = crypto.randomBytes(32).toString("hex");
    this.resetToken = resetToken;
    return resetToken;
}

userSchema.methods.resetPasswordhandler = function(password, confirmpassword){
    this.password = password;
    this.confirmpassword = confirmpassword;
    this.resetToken = undefined;
}


//createUser(); //calling the function
//model
const usermodel = mongoose.model('usermodel', userSchema)
module.exports = usermodel;