if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());

//Database Connection
mongoose.connect(process.env.DB_MONGO);
mongoose.connection
	.once('open', () => {
		console.log('DB connected');
	})
	.on('error', (err) => {
		throw 'An error occurred while connecting to Mongo';
	});

app.listen(process.env.PORT || 9000, () => {
	console.log(`Listening on port no ${process.env.PORT}`);
});
