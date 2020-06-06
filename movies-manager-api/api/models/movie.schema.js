const mongoose = require('mongoose');

// create schema
const movieSchema = new mongoose.Schema({
	titleType: String,
	primaryTitle: String,
	originalTitle: String,
	isAdult: Boolean,
	startYear: Number,
	endYear: Number,
	runtimeMinutes: Number,
	genre: String
});

module.exports = mongoose.model('movies', movieSchema);

