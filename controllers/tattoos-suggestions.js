suggestions.js

const express = require('express');
const router = express.Router();
const db = require('../models');
const { body, validationResult } = require('express-validator');

const validateTattoo = [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('image').notEmpty().withMessage('Image is required'),
    body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
    body('isFeatured').isBoolean().withMessage('isFeatured must be a boolean value'),
];

router.get('/', async (req, res) => {
    try {
        const tattoos = await db.Tattoo.find({});
        res.render('tattoo-index', { tattoos });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.get('/new', (req, res) => {
    res.render('new-form');
});

router.post('/', validateTattoo, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('new-form', { errors: errors.array() });
    }
    try {
        const tattoo = await db.Tattoo.create(req.body);
        res.redirect('/tattoos/' + tattoo._id);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tattoo = await db.Tattoo.findById(req.params.id);
        if (!tattoo) {
            return res.status(404).send('404 Error: Page Not Found');
        }
        res.render('tattoo-details', { tattoo });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id/edit', async (req, res) => {
    try {
        const tattoo = await db.Tattoo.findById(req.params.id);
        if (!tattoo) {
            return res.status(404).send('404 Error: Page Not Found');
        }
        res.render('edit-form', { tattoo });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.put('/:id', validateTattoo, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render('edit-form', { errors: errors.array() });
    }
    try {
        const tattoo = await db.Tattoo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/tattoos/' + tattoo._id);
    } catch (err) {         res.status(500).send('Internal Server Error');
}
});

router.delete('/:id', async (req, res) => {
try {
    await db.Tattoo.findByIdAndDelete(req.params.id);
    res.redirect('/tattoos');
} catch (err) {
    res.status(500).send('Internal Server Error');
}
});

module.exports = router;
