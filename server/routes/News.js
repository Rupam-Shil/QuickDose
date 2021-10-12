const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/topnews', async (req, res) => {
	const data = await axios.get(
		`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWSAPISECRET}`
	);
	res.json(data.data);
});

router.post('/searchnews', async (req, res) => {
	const { q } = req.body;
	const data = await axios.get(
		`https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.NEWSAPISECRET}`
	);
	const realdata = data.data.articles;
	const compressedData = [];
	realdata.forEach((el) => {
		compressedData.push({ title: el.title, url: el.url });
	});
	res.json(compressedData);
});

module.exports = router;
