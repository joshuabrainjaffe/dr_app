// =============================
// Requirements
// =============================
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	logger = require('morgan'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// =============================
// Middleware
// =============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));


// =============================
// DB
// =============================
mongoose.connect('mongodb://localhost/dr_app');


// =============================
// Models
// =============================
var Book = require('./models/char.js');

// =============================
// Homemade API
// =============================
var dystopia = require('./dr_api.js');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DYSTOPIA RISING API ROUTES //////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//--------------LIST ALL STRAINS-------------------)
app.get('/dystopia', function(req,res){
	
	console.log("server.js - app.get /dystopia");
  res.send( dystopia );

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHARACTER ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Index =============================================================//
app.get('/chars', function(req, res) {
	Book.find().then(function(chars) {
		console.log('==================');
		console.log(chars);
		console.log(typeof chars);
		console.log('==================');
		res.send(chars);
	});
});

// Show ===============================================================//
app.get('/chars/:id', function(req, res) {
	Book.findById(req.params.id).then(function(char) {
		console.log('==================');
		console.log(char);
		console.log(typeof char);
		console.log('==================');
		res.send(char);
	});
});

// Create =============================================================//
app.post('/chars', function(req, res) {
	var char = new Book(req.body);
	char.save(function(err) {
		if(err) {
			console.log('ERROR: ' + err);
		} else {
			console.log("saved");
			res.send(char);
		}
	});
});

// Update ==============================================================//
app.put('/chars/:id', function(req, res) {
	Book.findOneAndUpdate({
		_id: req.params.id
	}, {
		$set: req.body
	}, function(err, char) {
		res.send(char);
	});
});

// Delete ===============================================================//
app.delete('/chars/:id', function(req, res) {
	Book.findOneAndRemove({_id: req.params.id}, function(err) {
		if(err) console.log(err);
		console.log('Character deleted');
		res.send('Character deleted');
	});
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LISTEN //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port);
console.log('Server started at port: ' + port);
