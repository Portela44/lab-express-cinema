const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// GET movies page 
router.get ("/movies", async (req,res,next) => {
    try {
        const movies = await Movie.find({});
        res.render("movies", { movies });
    } catch (error) {
        next(error);
    }
})



module.exports = router;
