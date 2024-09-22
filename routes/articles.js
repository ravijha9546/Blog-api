const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Get all articles
router.get('/', async (req, res) => {
    const articles = await Article.find();
    const count = await Article.countDocuments();
    res.json({
        count,
        articles
});
});

// Get a single article by ID
router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
});

// Create a new article
router.post('/', async (req, res) => {
    const { title, content, tags } = req.body;
    const newArticle = new Article({ title, content, tags });
    await newArticle.save();
    res.status(201).json(newArticle);
});

// Update an article by ID
router.put('/:id', async (req, res) => {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(updatedArticle);
});

// Delete an article by ID
router.delete('/:id', async (req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
});

module.exports = router;


