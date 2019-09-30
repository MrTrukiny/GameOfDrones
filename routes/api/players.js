const express = require("express");
const router = express.Router();

// Player Model
const Player = require("../../models/Player");

// @route   POST api/players
// @desc    Register new player
// @access  Public
router.post("/", (req, res) => {
  const { name } = req.body;

  // Simple validation
  if (!name) {
    return res.status(400).json({ msg: "Please, input both players names" });
  }

  // Check for existing player (important for keep statistics)
  Player.findOne({ name }).then(player => {
    if (player) {
      return res.status(200).json(player);
    }
    const newPlayer = new Player({
      name
    });

    newPlayer.save().then(player => {
      res.json(player);
    });
  });
});

// @route   PATCH api/players/win
// @desc    Update Player Statistics
// @access  Public
// router.patch("/win", (req, res) => {
//   const name = req.body;

//   Player.updateOne(
//     { name },
//     { $inc: { "statistics.total_games": 1, "statistics.total_wins": 1 } }
//   ).then(player => {
//     res.json(player);
//   });
// });

module.exports = router;
