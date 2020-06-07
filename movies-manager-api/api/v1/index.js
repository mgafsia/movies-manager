const express = require('express');
const MovieSchema = require('../models/movie.schema');

// router
const router = express.Router();

// ping service
router.get('/api/v1/ping', (req, res) => {
	res.status(200).json({
		status: 'Up',
		date: new Date()
	});
});

// methods and services -----------------------------------------------//
// Search by primaryTitle and originalTile
router.get('/api/v1/movies/:primaryTitle/:originalTitle', (req, res) => {
	const primaryTitle = req.params.primaryTitle;
	const originalTitle = req.params.originalTitle;

	MovieSchema.find({
		primaryTitle: primaryTitle,
		originalTitle: originalTitle
	}).exec()
		.then(movies => {
			res.status(200).json(movies);
		}).catch(err => {
			res.status(500).json({
				message: `can not find movie with primaryTitle ${primaryTitle} and originalTile ${originalTitle}`,
				err
			});
		});
});

// Search by id
router.get('/api/v1/movies/:id', (req, res) => {
	const id = req.params.id;

	MovieSchema.findById(id,
		function (err, result) {
			if (err) {
				res.send(err);
			} else {
				res.status(200).json(result);
			}
		});
});

// Update Movie
router.put('/api/v1/movies', (req, res) => {
	const movie = new MovieSchema(req.body);
	const id = movie._id;
	MovieSchema.findByIdAndUpdate(id, movie, function (err, result) {
		if (err) {
			res.send(err);
		} else {
			res.status(200).json(result);
		}
	});
});

// export the module
module.exports = router;
