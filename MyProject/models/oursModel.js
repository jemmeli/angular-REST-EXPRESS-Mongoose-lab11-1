var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/OursDb');
var Schema   = mongoose.Schema;

var oursSchema = new Schema({
	'nom' : String,
	'age' : Number
}, {collection : 'ours'});

module.exports = mongoose.model('ours', oursSchema);
