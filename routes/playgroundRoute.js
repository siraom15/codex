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
router.get('/paragraph', (req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
  <body>
    <h5>หัวข้อ</h5>
    <p>ย่อหน้าแรก.</p>
    <p>ย่อหน้าถัดไป</p>
  </body>
</html>`;
  res.render('playground', {data : data});
})
router.get('/paragraph-br', (req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
  <body>
    <p>การกินเป็นสิ่งที่ต้องดูแล<br>กินอาหารที่สะอาด<br>หากละเลยจะเกิดผลเสีย</p>
  </body>
</html>`;
  res.render('playground', {data : data});
});
router.get('/list-ul', (req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li>กาแฟ</li>
      <li>ชาไทย</li>
      <li>นม</li>
    </ul>
  </body>
</html>`;
  res.render('playground', {data : data});
})
router.get('/list-ol', (req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
  <body>
    <ol>
      <li>กาแฟ</li>
      <li>ชาไทย</li>
      <li>นม</li>
    </ol>
  </body>
</html>`;
  res.render('playground', {data : data});
})
module.exports = router;
