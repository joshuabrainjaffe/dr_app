var mongoose = require('mongoose');
var ComplaintSchema = require('./har').schema;

var userSchema = mongoose.Schema({

	username: String,
	password: String,
	characters: [CharSchema]

});

var User = mongoose.model('user', userSchema);
module.exports = User;
