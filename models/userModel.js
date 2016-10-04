// require mongoose
var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// new Schema
var UserSchema = Schema({
	username: {
		type: String,
		required: true,
		unique: true // make sure the username is not repeated again
	},
	password: {
		type: String,
		required: true
	},
	coins: {
    pennies: { type: Number, default: 0 },
		nickels: { type: Number, default: 0 },
    dimes:  { type: Number, default: 0 },
		quarters: { type: Number, default: 0 }
  }
});

// use the above schema to make the User model
var User = mongoose.model('User', UserSchema);

// export the model so the server can use it
module.exports = User;
