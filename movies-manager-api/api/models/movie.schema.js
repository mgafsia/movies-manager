const mongoose = require('mongoose');

// create schema
const movieSchema = new mongoose.Schema({
	id: String,
	tconst: String,
	titleType: String,
	primaryTitle: String,
	originalTitle: String,
	isAdult: Boolean,
	startYear: Number,
	endYear: Number,
	runtimeMinutes: Number,
	genres: String,
});

module.exports = mongoose.model('movies', movieSchema);

