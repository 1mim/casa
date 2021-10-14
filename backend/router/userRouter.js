const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//import catalogue db from model
const User = require('../models/userModel');
const generateToken = require('../utils.js');

// get all user
router.get('/', async(req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.status(404).json({ nouserfound: error });

    }
})

//user login
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid email or passoword'})
})

module.exports = router;
