var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = "";
  res.render('playground', {data : data});
});
router.get('/heading',(req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
    <body>
        <h1>หัวข้อ 1</h1>
        <h2>หัวข้อ 2</h2>
        <h3>หัวข้อ 3</h3>
        <h4>หัวข้อ 4</h4>
        <h5>หัวข้อ 5</h5>
        <h6>หัวข้อ 6</h6>    
    </body>
</html>
  `;
  res.render('playground', {data : data});
});
router.get('/heading-hr',(req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
    <body>
        <h1>หัวข้อ 1</h1>
        <p>ข้อความ</p>
        <hr>
        
        <h2>หัวข้อ 2</h2>
        <p>ข้อความ.</p>
        <hr>
    
        <h3>หัวข้อ 3</h3>
        <p>ข้อความ</p>
    </body>
</html>
  
  `;
  res.render('playground', {data : data});
});

module.exports = router;
