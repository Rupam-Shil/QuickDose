const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../models/Userdetails");

router.post(
  "/signup",
  [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Please enter a strong password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const { name, email, password } = req.body;
    if (errors.isEmpty()) {
      const isUserExist = await User.findOne({ email });
      if (!isUserExist) {
        try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await User({
            name: name,
            email: email,
            password: hashedPassword,
          });
          const newUser = await user.save();
          res.json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          });
        } catch (err) {
          console.log(err);
          res.status(400).json({ error: "An error occurred while saving" });
        }
      } else {
        res.json({ error: "User already exists" });
      }
    } else {
      res.json({ error: errors.array()[0].msg });
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (checkPassword) {
      res.json({
        id: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
      });
    } else {
      res.json({ error: "Invalid Credentials" });
    }
  } else {
    res.json({ error: "User not found" });
  }
});

router.put("/interest", async (req, res) => {
  try {
    const { interest, id } = req.body;
    const user = await User.findByIdAndUpdate(id, { interest: interest });
    res.json({ interest: user.interest });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
