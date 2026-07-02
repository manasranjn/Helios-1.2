const express = require('express');
const router = express.Router();

const homeRoutes = require('./homeRoutes');
const aboutRoutes = require('./aboutRoutes');
const productRoutes = require('./productRoutes');

router.use('/home', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/products', productRoutes);

module.exports = router;