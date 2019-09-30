const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // This was an unfinished idea
  // statistics: {
  //   total_games: {
  //     type: Number,
  //     default: 0
  //   },
  //   wins: {
  //     type: Number,
  //     default: 0
  //   },
  //   defeats: {
  //     type: Number,
  //     default: 0
  //   }
  // },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Player = mongoose.model("player", PlayerSchema);
