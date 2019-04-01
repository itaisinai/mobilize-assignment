const express = require('express');
const router = express.Router();

// home page
router.get('/', (req, res) => res.send('Welcome to our membership management system!'));

module.exports = router;
