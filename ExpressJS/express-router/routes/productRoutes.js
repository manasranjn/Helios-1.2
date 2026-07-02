const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Products page' });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Product details for product with ID: ${id}` });
});


module.exports = router;