const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Joi = require('joi');

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	password: {
		type: String,
		required: true,
	},
	interest: {
		type: [String],
		default: [''],
	},
});

const User = mongoose.model('users', userSchema);

// const validate = (user) => {
// 	const schema = Joi.object({
// 		name: Joi.string().min(3).max(255).required(),
// 		email: Joi.string().email().required(),
// 	});
// 	return schema.validate(user);
// };

module.exports = User;
