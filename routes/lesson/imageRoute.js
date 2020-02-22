var express = require('express');
var router = express.Router();

router.get('/',(req, res, next)=>{
    res.redirect('/lesson/image/import');
})
router.get('/import',(req, res, next)=>{
    res.render('lesson/image/import');
})
router.get('/external-img',(req, res, next)=>{
    res.render('lesson/image/external-img');
})

module.exports = router;