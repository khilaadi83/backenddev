const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    //console.log("server is created")
    //console.log(req);
    //res.setHeader('Content-Type','text/plain');
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    //res.write("Thanks for visiting");

    let path = './views';
    switch (req.url) {
        case '/':
            path += '/index.html'

            break;
        case '/about':
            path += '/about.html'
            break;
            case '/about-me':
              res.setHeader('Location','/about');
              res.statusCode = 301; //when page is redirect change status code to 301
                break;
        default:
            path += '/pagenotfound.html'
            res.statusCode = 404
            break;
    }
    
    fs.readFile(path, (err, fileData) => {
        if (err) {
            res.write("Something went wrong");
        } else {
            res.write(fileData); // Rendering HTML Page
            res.end();
        }
    })


})

var port = 3000;
server.listen(port, 'localhost', () => {
    console.log("Listening on port listen on port", +port);
}) //takes 3 argment port number, localhost, callback