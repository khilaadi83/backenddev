1. npm init -y
This will generate a package.json file inside the folder

to make everything setup you can use npx express-generator
npm install
2. install express and openai liabraries
npm i express openai

3. Create an express server
const express =  require('express')
const app = express()

app.use(express.static('public'))

app.listen(5000, ()=> {
    console.log("Server is active")
})

4. Create a public folder which which will render the html documents
5. npm start command to start the server
6. on the webpage use localhost:port ex localhost:5000 it will render the html page


Require this in server.js file
7. const { Configuration, OpenAIApi } = require("openai")
