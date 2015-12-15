// =============================
// Requirements
// =============================
var express = require('express'),
		app = express(),
		port = process.env.PORT || 3000,
		logger = require('morgan'),
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		passport = require('passport'),
		flash    = require('connect-flash'),
		morgan       = require('morgan'),
		cookieParser = require('cookie-parser'),
		session      = require('express-session');

// =============================
// Middleware
// =============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'kenderpumper' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// =============================
// DB
// =============================
mongoose.connect('mongodb://localhost/dr_app');

require('./config/passport.js')(passport); // pass passport for configuration

// =============================
// Models
// =============================
var Book = require('./models/char.js');
// var User = require('./models/user.js');

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
