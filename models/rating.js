const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    barberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber' },
    rating: Number,
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;
