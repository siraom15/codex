var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/:id', (req, res, next) => {
    try {
        let txt = fs.readFileSync('./public/shared_code/' + req.params.id + '.txt', "utf8");
        console.log(txt);

        res.render('playground', { data: txt });
        res.end();
    } catch (err) {
        // res.redirect('/')
        console.log(err);
        res.send(err);
        res.end();
    }
});
router.post('/', (req, res, next) => {
    try {
        let name = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        let txt = fs.writeFileSync('./public/shared_code/' + name + '.txt', req.body.data);
        res.send('ลิ้งค์สำหรับแชร์คือ <a href="http://codex-skdw.herokuapp.com/playground/save/'+name+'" target="_blank"> http://codex-skdw.herokuapp.com/playground/save/'+name +'</a>');
        res.end();
    } catch (error) {
        console.log(err);
        res.send('เพิ่มไม่สำเร็จ');
        res.end();
    }

});
module.exports = router;