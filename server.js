// =============================
// Requirements
// =============================
var express = require('express'),
		app = express(),
		port = process.env.PORT || 3000,
		logger = require('morgan'),
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
		hash = require('bcrypt-nodejs'),
		path = require('path'),
		passport = require('passport'),
		localStrategy = require('passport-local' ).Strategy,
    router = express.Router();


// =============================
// Middleware
// =============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// =============================
// Models
// =============================
var Book = require('./models/char.js');
var User = require('./models/user.js');

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// =============================
// DB
// =============================
mongoose.connect('mongodb://localhost/dr_app');


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

/////////////////////////////////
// USER ROUTES
////////////////////////////////


router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err});
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'});
    });
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(500).json({err: err});
    }
    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'});
      }
      res.status(200).json({status: 'Login successful!'});
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({status: 'Bye!'});
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

////////////////////////////////////////////////
// ERROR HANDLERS
////////////////////////////////////////////////
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LISTEN //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port);
console.log('Server started at port: ' + port);
