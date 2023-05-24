const mongoose = require("mongoose");

const followingSchema = new mongoose.Schema({
    followerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    followedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Following = mongoose.model("Following", followingSchema);

module.exports = Following;