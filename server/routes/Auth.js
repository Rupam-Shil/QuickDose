const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const User = require('../models/Userdetails');
const Token = require('../models/Token');
// const sendEmail = require('../utils/sendEmail');

router.post(
	'/signup',
	[
		check('email', 'Please provide a valid email').isEmail(),
		check('password', 'Please enter a strong password').isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		const { name, email, password } = req.body;
		if (errors.isEmpty()) {
			const isUserExist = await User.findOne({ email });
			if (!isUserExist) {
				try {
					const hashedPassword = await bcrypt.hash(password, 10);
					const user = await User({
						name: name,
						email: email,
						password: hashedPassword,
					});
					const newUser = await user.save();
					//email verify
					// const characters =
					// 	'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
					// let token = '';
					// for (let i = 0; i < 25; i++) {
					// 	token += characters[Math.floor(Math.random() * characters.length)];
					// }
					// const validateToken = new Token({
					// 	userId: user._id,
					// 	token: token,
					// });
					// await validateToken.save();
					// const linkToValidate =
					// 	process.env.VALIDATELINK + `/${user._id}/${validateToken.token}`;
					// await sendEmail(
					// 	email,
					// 	'verify email address',
					// 	'Please verify your email address',
					// 	linkToValidate
					// );
					res.json({
						id: newUser.id,
						name: newUser.name,
						email: newUser.email,
					});
				} catch (err) {
					console.log(err);
					res
						.status(400)
						.json({ error: 'An error occurred while saving', flag: false });
				}
			} else {
				res.json({ error: 'User already exists', flag: true });
			}
		} else {
			res.json({ error: errors.array()[0].msg, flag: false });
		}
	}
);

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const checkUser = await User.findOne({ email });
	if (checkUser) {
		const checkPassword = await bcrypt.compare(password, checkUser.password);
		if (checkPassword) {
			res.json({
				id: checkUser.id,
				name: checkUser.name,
				email: checkUser.email,
			});
		} else {
			res.json({ error: 'Invalid Credentials' });
		}
	} else {
		res.json({ error: 'User not found' });
	}
});

router.put('/interest', async (req, res) => {
	try {
		const { interest, id } = req.body;
		const user = await User.findByIdAndUpdate(id, { interest: interest });
		res.json({ interest: user.interest });
	} catch (err) {
		console.log(err);
	}
});

router.get('/validate/:id/:token', async (req, res) => {
	try {
		const { id, token } = req.params;
		const user = await User.findOne({ id });
		if (user) {
			try {
				const getToken = await Token.findOne({ token });

				if (getToken.userId == user.id) {
					console.log('matched');
					res.redirect('http://localhost:8080/');
				} else {
					console.log('not matched');
				}
			} catch (err) {
				console.log('AN error occurred');
			}
		} else {
			console.log('user not registered');
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
