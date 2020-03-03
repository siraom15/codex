var express = require('express');
var router = express.Router();

router.get('/',(req, res, next)=>{
    res.redirect('/lesson/bootstrap/intro');
})
router.get('/intro',(req, res, next)=>{
    res.render('lesson/bootstrap/intro');
})
router.get('/layout',(req, res, next)=>{
    res.render('lesson/bootstrap/layout');
})
router.get('/component',(req, res, next)=>{
    res.render('lesson/bootstrap/component');
})

module.exports = router;