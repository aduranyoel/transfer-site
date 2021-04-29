const
    express = require('express'),
    router = express.Router(),
    logger = require('../shared/logger'),
    Node = require('../model/node');

function errorHandler(res, message) {
    logger(message);
    res.status(500);
    res.render('error', {message});
}

router.use((req, res, next) => {
    const acceptLanguage = req.header('accept-language') || '';
    req.extra = {
        locale: acceptLanguage.split(',')[0] || 'en-US'
    };
    next();
});

router.get('/', async (req, res) => {
    try {
        res.render("home", {
            ...req.extra,
            siteImage: 'https://www.megacourses.top/img/thumbnail.png'
        });
    } catch (error) {
        errorHandler(res, error.message);
    }
});

router.get('/transfer/:agree', async (req, res) => {
    try {
        res.render("transfer", {
            ...req.extra,
            siteImage: 'https://www.megacourses.top/img/thumbnail.png',
            agree: req.params.agree
        });
    } catch (error) {
        errorHandler(res, error.message);
    }
});
router.get('/transfer', async (req, res) => {
    try {
        res.render("transfer", {
            ...req.extra,
        });
    } catch (error) {
        errorHandler(res, error.message);
    }
});

module.exports = router;
