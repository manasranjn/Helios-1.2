const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to about page' });
});
router.post('/', (req, res) => {
    res.json({ message: 'About page POST request' });
});
router.put('/', (req, res) => {
    res.json({ message: 'About page PUT request' });
});
router.delete('/', (req, res) => {
    res.json({ message: 'About page DELETE request' });
});

module.exports = router;