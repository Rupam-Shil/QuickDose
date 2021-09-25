const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/Userdetails');
const { body, validationResult } = require('express-validator');

router.post(
	'/signup',
	body('email').isEmail(),
	body('password').isLength({ min: 6 }),
	(req, res) => {
		const errors = validationResult(req);
		const { name, email, password } = req.body;
	}
);

module.exports = router;
