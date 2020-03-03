var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = "";
  res.render('playground', { data: data });
});
router.get('/heading', (req, res, next) => {
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
  res.render('playground', { data: data });
});
router.get('/heading-hr', (req, res, next) => {
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
  res.render('playground', { data: data });
});
router.get('/paragraph', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>
    <h5>หัวข้อ</h5>
    <p>ย่อหน้าแรก.</p>
    <p>ย่อหน้าถัดไป</p>
  </body>
</html>`;
  res.render('playground', { data: data });
})
router.get('/paragraph-br', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>
    <p>การกินเป็นสิ่งที่ต้องดูแล<br>กินอาหารที่สะอาด<br>หากละเลยจะเกิดผลเสีย</p>
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/list-ul', (req, res, next) => {
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
  res.render('playground', { data: data });
})
router.get('/list-ol', (req, res, next) => {
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
  res.render('playground', { data: data });
});
router.get('/style-bg', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
    <body style="background-color: pink">
        
    </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/style-text', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
    <body >
        <h3 style="color:pink;" > ตัวอีกษรสีชมพู </h3>
        <h3 style="color:green;" > ตัวอีกษรสีเขียว </h3>
    </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/text-size', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
    <body>
        <span style="font-size: 40px;">40 pixel </span><br>
        <span style="font-size: 30px;">30 pixel </span><br>
        <hr>
        <span style="font-size: 100%;">100% </span><br>
        <span style="font-size: 90%;">90% </span>    
    </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/text-alignment', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
    <body>
        <h3 style="text-align: right;">ขวา </h3>
        <h3 style="text-align: center;">กึ่งกลาง </h3>
        <h3 style="text-align: left;">ซ้าย </h3>
    </body>
</html>
  `;
  res.render('playground', { data: data });
});
router.get('/import-img-demo', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>
    <img src="/pic/logo.png" alt="the code X" width="200" height="200">
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/img-size', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>
      <img src="/pic/logo.png" alt="the code X" width="100" height="100">
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/img-link', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>
      <img src="http://www.sukhon.ac.th/site/wp-content/uploads/2017/08/headsite4.png" alt="sukhon.ac.th" >
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/img-link-website', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>
      <a href="https://www.sukhon.ac.th">
          <img src="/pic/sukhon.gif" alt="Sukhon Logo" >
      </a>
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/link', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>                    
      <a href="https://codex-skdw.herokuapp.com">ไปยังเว็บ Codex </a>
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/link-local', (req, res, next) => {
  let data = `<!DOCTYPE html>
  <html>
    <body>                    
        <a href="./hello.html">ลิ้งค์เว็บไซต์ภายใน </a>
    </body>
  </html>`;
    res.render('playground', { data: data });
});
router.get('/hello.html', (req, res, next) => {
  res.render('component/hello')
})
router.get('/bye.html', (req, res, next) => {
  res.render('component/bye')
})
router.get('/link-external-1', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>                    
      <a href="http://www.sukhon.ac.th">เว็บไซต์โรงเรียนสุคนธีวิทย์</a>
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/link-external-2', (req, res, next) => {
  let data = `<!DOCTYPE html>
<html>
  <body>                    
      <a href="https://www.google.com">Google</a>
  </body>
</html>`;
  res.render('playground', { data: data });
});
router.get('/css-body',(req, res, next)=>{
  let data = `<!DOCTYPE html>
<html>
  <head>
      <style>
        body { 
          background-color: powderblue; 
        }
        h1  { 
          color: blue; 
        }
        p { 
          color: red; 
        }
      </style>
  </head>
  <body>
    <h1>หัวเรื่อง</h1>
    <p>เนื้อหา</p>
  </body>
</html>
  `
  res.render('playground', { data: data });
});
router.get('/bootstrap',(req, res, next)=>{
  let data = `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <title>Hello, world!</title>
    </head>
    <body>

      <h1>Hello </h1>

    </body>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>
  </html>
  `
  res.render('playground', { data: data });
});
module.exports = router;
