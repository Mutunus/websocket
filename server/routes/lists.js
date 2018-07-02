const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://admin:admin@ds153123.mlab.com:53123/project-server', ['countries'])

router.get('/countries', function(req, res, next) {
	db.countries.find(function(err, countries) {
		if(err) {
			res.send(err);
		}
		else {
			res.json(countries);
		}
	})
});

// // GET A USER
// router.get('/user/:id', function(req, res, next) {
// 	db.users.findOne({
// 		_id: mongojs.ObjectId(req.params.id)
// 	}, function(err, user) {
// 		if(err) {
// 			res.send(err);
// 		}
// 		else {
// 			res.json(user);
// 		}
// 	})
// });

// //SAVE NEW USER
// router.post('/user', function(req, res, next) {
// 	const user = req.body;
// 	db.users.save(user, function(err, result) {
// 		if(err) {
// 			res.send(err);
// 		}
// 		else {
// 			res.json(result);
// 		}
// 	})
// })

// //UPDATE USER
// router.put('/user/:id', function(req, res, next) {
// 	const user = req.body;
// 	const updObj = {};
	
// 	if(user.isCompleted) {
// 		updObj.isCompleted = user.isCompleted;
// 	}
// 	if(user.text) {
// 		updObj.text = user.text;
// 	}
// 	if(!updObj) {
// 		res.status(400);
// 		res.json({
// 			"error": "invalid datasas"
// 		});
// 	}
// 	else {
// 		db.users.update({
// 			_id: mongojs.ObjectId(req.params.id)
// 		}, updObj, {}, function(err, res) {
// 			if(err) {
// 				res.send(err);
// 			}
// 			else {
// 				res.json(res);
// 			}
// 		})
// 	}
// })

// //DELETE user
// router.delete('/user/:id', function(req, res, next) {

// 	db.users.remove({
// 		_id: mongojs.ObjectId(req.params.id)
// 	}, '', function(err, res) {
// 		if(err) {
// 			res.send(err);
// 		}
// 		else {
// 			res.json(res);
// 		}
// 	})
// })

module.exports = router;