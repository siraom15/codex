var express = require('express');
var router = express.Router();
router.get('/', (req, res, next) => {
    res.render('lesson/layout/layout');
})
router.get('/css', (req, res, next) => {
    res.render('lesson/layout/css');
})

module.exports = router;