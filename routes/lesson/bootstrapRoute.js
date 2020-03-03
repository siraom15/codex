var express = require('express');
var router = express.Router();

router.get('/',(req, res, next)=>{
    res.redirect('/lesson/bootstrap/intro');
})
router.get('/intro',(req, res, next)=>{
    res.render('lesson/bootstrap/intro');
})


module.exports = router;