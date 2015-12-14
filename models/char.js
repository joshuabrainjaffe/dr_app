var mongoose = require('mongoose');

var CharSchema = mongoose.Schema({
	name: String,
	strain: String,
	mind: Number,
	health: Number,
	infection: Number,
	profession: String,
	skills: Array,
	adv: Array,
	dis: Array,
	imgurl: String,
	backstory: String
})

var Char =  mongoose.model('Char', CharSchema);
module.exports = Char;
