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

module.exports = function(app) {

    var passport = require('passport');
    var mongoose = require('mongoose');
    var LocalStrategy = require('passport-local').Strategy;


    var user = require('./models/user.js');
    var User = mongoose.model('User');

    var session = require('express-session');
    var MongoStore = require('connect-mongo')(session);

    app.use(session({
        store: new MongoStore({
            url: 'mongodb://localhost/test'
         }),
        secret: 'codetutorialsecret',
        resave:true,
        saveUninitialized:true
    }));

    app.use(passport.initialize());

    app.use(passport.session());


    passport.use(new LocalStrategy(
        function (username, password, done) {

            User.findOne({username: username}, function (err, user) {

                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {alert: 'Incorrect username.'});
                }
                if (user.password != password) {
                    return done(null, false, {alert: 'Incorrect password.'});
                }
                return done(null, user);
            });
        }

    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
             done(err, user);
        });
    });

    function isAuthenticated(req,res,next){
        if(req.isAuthenticated())return next();
         res.send(401);
    }


    app.post('/auth/login', passport.authenticate('local'),function(req, res){
        res.json(req.user);
    });


    app.get('/auth/currentuser',isAuthenticated,function(req,res){
        res.json(req.user);
    });

    app.post('/auth/signup',function(req,res){

        var u =  new User();
        u.username = req.body.email;
        u.password = req.body.password;
        u.lastname = req.body.lastname;
        u.firstname = req.body.firstname;
        u.email = req.body.email;

        u.save(function(err){
            if (err) {
                res.json({'alert':'Registration error'});
            }else{
                res.json({'alert':'Registration success'});
            }
        });
    });

     app.get('/auth/logout', function(req, res){
         console.log('logout');
        req.logout();
        res.send(200);
     });

};

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
