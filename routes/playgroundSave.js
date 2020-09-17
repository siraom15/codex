var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'remotemysql.com',
    port: 3306,
    user: 'mKUsVS9x6G',
    password: 'wGN54WmUBz',
    database: 'mKUsVS9x6G'
});


var fs = require('fs');
router.get('/:id', (req, res, next) => {
    try {
        connection.connect();

        connection.query('SELECT * FROM shared_code WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) throw err;
            res.render('playground', { data: rows[0].data });
            res.end();
            connection.end();


        });

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

        connection.connect();

        connection.query('INSERT INTO shared_code (id, data) VALUES (?,?)', [name, req.body.data], (err) => {
            if (err) throw err;
            res.send('ลิ้งค์สำหรับแชร์คือ <a href="http://codex-skdw.herokuapp.com/playground/save/' + name + '" target="_blank"> http://codex-skdw.herokuapp.com/playground/save/' + name + '</a>');
            res.end();

        })
        connection.end();
        // let txt = fs.writeFileSync('./public/shared_code/' + name + '.txt', req.body.data);
    } catch (error) {
        console.log(err);
        res.send('เพิ่มไม่สำเร็จ');
        res.end();
    }

});
module.exports = router;