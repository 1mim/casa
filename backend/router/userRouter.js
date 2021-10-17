const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//import catalogue db from model
const User = require('../models/userModel');
const generateToken = require('../utils.js');
const isAuth = require('../auth')

// get all user
router.get('/', async(req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (error) {
        res.status(404).json({ nouserfound: error });

    }
})

//get user by id:
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.send(404).send({ message: 'User Not Found' });
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

//create new user account
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(createdUser),
    })
})


//updating user info
router.put('/profile', isAuth, async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser), 
        })
    }
})

module.exports = router;
