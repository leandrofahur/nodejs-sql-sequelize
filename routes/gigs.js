const express = require("express");
const router = express.Router();

const db = require("../config/db");
const Gig = require("../models/Gig");

router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    console.log({ gigs });
    res.sendStatus(200);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(400);
  }
});

module.exports = router;
