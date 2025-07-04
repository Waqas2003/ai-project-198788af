const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Movie not found' });
  }
};