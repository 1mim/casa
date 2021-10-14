const express = require('express');
const router = express.Router();

//import catalogue db from model
const User = require('../models/userModel');

// get all user
router.get('/', async(req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.status(404).json({ nouserfound: error });

    }
})


module.exports = router;
