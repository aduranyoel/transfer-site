const express = require('express');
const router = express.Router();
const logger = require('../shared/logger');

router.get('/resources', async (req, res) => {
    try {
        res.json({
            response: [],
            error: null
        })
    } catch (error) {
        logger(error);
        res.status(400).json({
            response: null,
            error: error.message
        })
    }
});

module.exports = router;
