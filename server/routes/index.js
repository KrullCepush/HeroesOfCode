const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

/* GET home page. */
router.put("/endfight", async (req, res) => {
  const playerInitial = await User.findOne({ username: req.body.player });
  playerInitial.player.gold += req.body.gold;
  playerInitial.markModified("player.gold");
  await playerInitial.save();
  res.json({
    status: true
  });
});

module.exports = router;
