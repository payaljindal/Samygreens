const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schema = mongoose.Schema;

const productSchema = new schema({
	name : {type : String, required : true},
	image : {type: String , required : true},
	texture : {type : String },
	flavour : {type : String },
	taste : { type : String},
	suggesteduse  : {type : String},
	price : { type : Number},
	category : {type : String},
	
});

productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Product',productSchema);

