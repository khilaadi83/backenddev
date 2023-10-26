var express = require('express');
var router = express.Router();

var path = require('path');
//import the multer library
var multer = require('multer');
var path = require('path');
var fs = require('fs');

//import PDFkit
var PDFDocument = require('pdfkit');

//create a '/' GET route that'll return the index.html file stored in the public/html folder
router.get('/', function (req, res, next) {
  if (req.session.imagefiles === undefined){
  res.sendFile(path.join(__dirname, '..', '/public/html/index.html'));} else{
    res.render('index', {images: req.session.imagefiles} )
  }

});
/* Next, you'll open your routes/index.js file and create an /upload route that'll receive the image files, store them in a folder, store the filenames in the session store, and redirect the request to the root URL. */
/* Open your routes/index.js file and create a route that'll receive the image filenames, store them in a session and redirect to the root URL: */
let storage = multer.diskStorage({
  //store the images in the public/images folder
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  //rename the images
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
  }
})



//configuration for file filter
let fileFilter = (req, file, callback) => {
	let ext = path.extname(file.originalname);
	//if the file extension isn't '.png' or '.jpg' return an error page else return true
	if (ext !== '.png' && ext !== '.jpg'){
		return callback(new Error('Only png and jpg files are accepted'))
	} else {
		return callback(null, true)
	}
}
//initialize Multer with the configurations for storage and file filter
var upload = multer({ storage, fileFilter: fileFilter});

router.post('/upload', upload.array('images'), function (req, res){
	let files = req.files;
	let imgNames = [];
  for( i of files){
		let index = Object.keys(i).findIndex( function (e){return e === 'filename'})
		imgNames.push( Object.values(i)[index] )
	}
	//store the image filenames in a session
	req.session.imagefiles = imgNames
		
    //redirect the request to the root URL route
	res.redirect('/')
})
router.post('/pdf', function(req, res, next) {
	let body = req.body
	
	//Create a new pdf
	let doc = new PDFDocument({size: 'A4', autoFirstPage: false}); 
	let pdfName = 'pdf-' + Date.now() + '.pdf';
	
	//store the pdf in the public/pdf folder
	doc.pipe( fs.createWriteStream( path.join(__dirname, '..',`/public/pdf/${pdfName}` ) ) );
	
	//create the pdf pages and add the images
	for(let name of body){
		doc.addPage()
		doc.image(path.join(__dirname, '..',`/public/images/${name}`),20, 20, {width: 555.28, align: 'center', valign: 'center'} )
	}
	//end the process
	doc.end();
	
    //send the address back to the browser
	res.send(`/pdf/${pdfName}`)
})




module.exports = router;