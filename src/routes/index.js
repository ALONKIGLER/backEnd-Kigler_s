const express = require("express");

/* GET home page. */
const router = express.Router();

router.get("/pp", function (req, res, next) {
  res.status(404).json({
    error: "user not found",
  });
  next();
});

module.exports = router;
