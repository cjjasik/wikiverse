const express = require("express");
const router = express.Router();

//Middleware - added
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// different model routers
router.use('/wiki', require('./wiki'));
router.use('/users', require('./users'));

module.exports = router;
