const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

/* GET users listing. */

router.get("/checksession", (req, res) => {
  const user = req.session.user;

  if (user === undefined) {
    res.json({
      status: false
    });
  } else {
    res.json({
      status: true,
      player: user.player
    });
  }
});

router.post("/login", async (req, res, next) => {
  const findUser = await User.findOne({ username: req.body.username });
  if (findUser === null) {
    res.json({
      status: false,
      errorStatus: "Пользователь не найден"
    });
  } else {
    const checkPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    if (checkPassword) {
      req.session.user = findUser;
      res.json({
        status: true,
        player: findUser.player
      });
    } else {
      res.json({
        status: false,
        errorStatus: "Неверный пароль"
      });
    }
  }
});

router.route("/registration").post(async (req, res) => {
  const findUser = await User.findOne({ username: req.body.username });
  if (findUser === null) {
    const password = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: password,
      player: {
        create: false,
        type: "player",
        name: req.body.username,
        avatar:
          "https://media1.tenor.com/images/61e0fdd11ebb9b53daa6d58043167f1f/tenor.gif?itemid=14283740",
        percs: [],
        stats: {
          health: 300,
          damage: 10
        },
        gold: 30
      }
    });
    await user.save();
    req.session.user = user;
    res.json({
      status: true,
      player: user.player
    });
  } else {
    res.json({
      status: false,
      errorStatus: "Имя пользователя занято"
    });
  }
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.json(true);
});

module.exports = router;
