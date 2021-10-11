if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text, link) => {
	try {
		const transport = nodemailer.createTransport({
			host: process.env.HOST,
			port: process.env.MAILPORT,
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		let mailOptions = {
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
			html: `<a href='${link}'>Click Here</a>'`,
		};
		await transport.sendMail(mailOptions);
	} catch (err) {
		console.log('Email not sent');
		console.log(err);
	}
};

module.exports = sendEmail;
