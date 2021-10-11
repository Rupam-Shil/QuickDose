const mongoose = require('mongoose');
const { Schema } = mongoose;

const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'users',
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
});

const Token = mongoose.model('tokens', tokenSchema);

module.exports = Token;
