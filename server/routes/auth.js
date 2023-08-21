const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

router.post("/register", validInfo, async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    console.log(password)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length > 0) {
      return res.status(200).json({error: "User already exist!"});
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    // console.log(password)
    // console.log(type(bcryptPassword))

    let newUser = await pool.query(
      "INSERT INTO users (user_first_name, user_last_name, user_email, user_phone, user_password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstName, lastName, email, phone, bcryptPassword]
    );

    // const jwtToken = jwtGenerator(newUser.rows[0].user_id);
    return res.status(201).json({ created: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login",  validInfo, async (req, res) => {
  const {  email, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length === 0) {
      return res.status(200).json({error: "Invalid Credential"});
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(200).json({error: "Invalid Credential"});
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ "token": jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/forgot", validInfo, async (req, res) => {
  const { email } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (!user.rows.length) {
      return res.status(200).json({error: "User Does not exist!"});
    }

    // Handle functionality to send email to user with link to reset password
    // .
    // .
    // .
    // const jwtToken = jwtGenerator(newUser.rows[0].user_id);
    return res.status(200).json({ sent: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
