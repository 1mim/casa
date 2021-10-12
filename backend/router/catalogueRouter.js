const express = require('express');
const router = express.Router();

//import catalogue db from model
const catalogue = require('../models/catalogue');

//Get all catalogue from DB
router.get('/', async (req, res) => {
    try {
        const wholeCatalogue = await catalogue.find();
        res.json(wholeCatalogue);
    } catch (error) {
        res.status(404).json({ nocataloguefound: error });
    }
});

//Get selected product from catalogue by id
router.get('/:id', (req, res) => {
    catalogue.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(404).json({ noproductfound: "no such product in catalogue" }))
});

module.exports = router;