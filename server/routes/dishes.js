const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://admin:admin123@ds259820.mlab.com:59820/tim_sandbox', ['dishes'])

router.get('/dishes', (req, res, next) => {
	db.dishes.find((err, dishes) => {
		err ? res.send(err) : res.json(dishes)
	})
})

module.exports = router;