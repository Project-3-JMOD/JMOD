const express = require('express');
const router = express.Router();
// @route  get api/post
// @desc   test route
// @access value public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;