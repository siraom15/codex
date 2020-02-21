var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/lesson/basic/introduce');
});
router.get('/introduce', function (req, res, next) {
  res.render('lesson/basic/introduce');
});
router.get('/structure', (req, res, next) => {
  res.render('lesson/basic/structure');
})
router.get('/heading', (req, res, next) => {
  res.render('lesson/basic/heading');
})
router.get('/paragraph', (req, res, next)=>{
  res.render('lesson/basic/paragraph');
})
router.get('/list', (req, res, next)=>{
  res.render('lesson/basic/list');
})
module.exports = router;
