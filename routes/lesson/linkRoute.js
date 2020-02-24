var express = require('express');
var router = express.Router();
router.get('/', (req, res, next) => {
    res.render('lesson/link/link');
})


module.exports = router;