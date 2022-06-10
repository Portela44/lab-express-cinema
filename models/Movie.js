const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    title: {
        type:String,
        unique:true,
    },
    director: {
        type:String,
    },
    stars: {
        type: [String],
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: {
        type: [String],
    }
})

const Movie = model("movie", movieSchema);
module.exports = Movie