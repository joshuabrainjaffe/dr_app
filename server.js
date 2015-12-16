// =============================
// Requirements
// =============================
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	logger = require('morgan'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');
	md5 = require('md5');
	cookieParser = require('cookie-parser');


// =============================
// Middleware
// =============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(cookieParser());


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

app.get('/dystopia', function(req,res){

	console.log("server.js - app.get /dystopia");
  res.send( dystopia );

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USER ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SIGN UP ( CREATE NEW USER )
app.post('/users', function(req, res) {

  password_hash = md5(req.body.password);

  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: password_hash
  });

  user.save(function(err) {
    if(err) {
      console.log(err);
    } else {

      res.cookie("loggedinId", user.id)

      res.send({
        id: user.id,
        username: user.username,

      });
    };
  });
});


//LOG IN OLD USER
app.post('/login', function(req, res) {
  console.log("server.js - /login");

  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ 'email': email }, function( err, user){

    var request_password_hash = md5( password );

    if( user != null && request_password_hash == user.password){

        res.cookie("loggedinId", user.id)
        res.send("server.js - /login - logged in")

    } else {

      res.status = 403;
      res.send("server.js - /login - didn't login")

    }
  });
});


app.get('/users/email/:email', function(req, res){

  User.findOne({ 'email': req.params.email }, function(err, user){
    res.send(user);

  });
});

//KEEP USER LOGGED IN VIA COOKIE
var userid = ''

app.post('/login/cookie', function(req, res) {
  console.log("server.js - /login/cookie");

  var userid = req.body.id;

  User.findOne({ '_id': id }, function( err, user){

      res.send(user)

  });
});

app.get('/users/id/:id', function(req, res){

  console.log( "app.get(/users/id): " + req.params.id );

  User.findOne({ '_id': req.params.id }, function(err, user){
    res.send(user);

    console.log("user by id: " + user);
  });

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHARACTER ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Index =============================================================//
app.get('users/:id/chars', function(req, res) {

	if (req.cookies.loggedinId != undefined){

		Char.find().then(function(chars) {
			console.log('==================');
			console.log(chars);
			console.log(typeof chars);
			console.log('==================');
			res.send(chars);
		});

	} else {

    res.send("NO STUFF FOR YOU")

  };

});

// Show ===============================================================//
app.get('/chars/:id', function(req, res) {
	Char.findById(req.params.id).then(function(char) {
		console.log('==================');
		console.log(char);
		console.log(typeof char);
		console.log('==================');
		res.send(char);
	});
});

// Create =============================================================//
app.post('/chars', function(req, res) {
	var char = new Char(req.body);
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
app.put('/users/:id/chars/:id', function(req, res) {
	Char.findOneAndUpdate({
		_id: req.params.id
	}, {
		$set: req.body
	}, function(err, char) {
		res.send(char);
	});
});

// Delete ===============================================================//
app.delete('/chars/:id', function(req, res) {
	Char.findOneAndRemove({_id: req.params.id}, function(err) {
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
