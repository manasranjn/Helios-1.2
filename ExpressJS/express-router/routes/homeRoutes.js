const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Home page' });
});
router.post('/', (req, res) => {
    res.json({ message: 'Home page POST request' });
});
router.put('/', (req, res) => {
    res.json({ message: 'Home page PUT request' });
});
router.delete('/', (req, res) => {
    res.json({ message: 'Home page DELETE request' });
});

module.exports = router;