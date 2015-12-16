// user model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    CharSchema = require('./char').schema;

var User = new Schema({
  username: String,
  password: String,
  characters: [CharSchema]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', User);
