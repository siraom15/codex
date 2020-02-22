var express = require('express');
var router = express.Router();
router.get('/',(req, res, next)=>{
    res.redirect('/lesson/style/style');
})
router.get('/style',(req, res, next)=>{
    res.render('lesson/style/style');
})
router.get('/text-formatting',(req, res, next)=>{
    res.render('lesson/style/text-formatting');
})

module.exports = router;