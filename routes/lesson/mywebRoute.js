var express = require('express');
var router = express.Router();

router.get('/',(req, res, next)=>{
    res.render('lesson/myweb/intro');
})


module.exports = router;