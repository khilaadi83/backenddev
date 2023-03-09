var express = require('express');
var app = express();
const port = 4000;
app.get('/', (req, res) => {
    console.log("you are in homepage")

    var hostname = req.hostname;
    res.send(hostname)

})
app.get('/about', (req, res) => {
    var name = "kartik"
    //res.send("inside about us page") // similar as res.print
    res.sendFile('./views/about.html', {
        root: __dirname
    }) // returns absolute path 
})
var users = [{
    "id": 1,
    "name": "kartik",

}, {
    "id": 2,
    "name": "narang"
}];
// whenever we send data from front end to backend it goes in the body of request
app.use(express.json())
app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    users = req.body
    console.log(req.body)
    res.json({
        message: "success",
        users: req.body
    })
})

app.patch('/user', (req, res) => {
    for (key in req.body) {
        users[key] = req.body[key]
    }
    res.json({
        message: "successful"

    })
})

// Example of query parameter example
app.get('/usernames/:id', (req, res) => {
    res.send(req.params.id)
    console.log(req.params)

}) //localhost:400/id/23 ==> output will be 23
app.get("/usernames", (req, res) => {
    console.log(req.query)
    if (req.query.id == 22) {
        res.send("Welcome to this secret page Mr.")
    } else {
        res.send("Sorry This page is not valid for you")
    }
})

//app.use will execute if no route matches

app.use((req, res) => {
    res.send("No such path exists try again")
})

// Example for posting data


app.listen(port, () => {
    console.log("listning on port", port);
})