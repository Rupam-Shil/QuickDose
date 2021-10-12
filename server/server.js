if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//routes
const auth = require('./routes/Auth');
const news = require('./routes/News');
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
mongoose.connect(process.env.DB_MONGO);
mongoose.connection
	.once('open', () => {
		console.log('DB connected');
	})
	.on('error', (err) => {
		throw 'An error occurred while connecting to Mongo';
	});

app.use('/auth', auth);
app.use('/news', news);

app.listen(process.env.PORT, () => {
	console.log(`Listening on port no ${process.env.PORT}`);
});
