var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=>{
  res.redirect('/lesson/basic/introduce');
});
router.get('/introduce', function(req, res, next) {
  res.render('lesson/basic/introduce');
});
router.get('/structure',(req, res, next)=>{
  res.render('lesson/basic/structure');
})
module.exports = router;
