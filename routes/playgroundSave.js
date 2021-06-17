var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: '163.44.198.45',
    port: 3306,
    user: 'cp839227_codex',
    password: 'S*4BjlvmCFJp',
    database: 'cp839227_codex'
});
// connection.connect();
connection.on('error', function (err) {
    console.log('caught this error: ' + err.toString());
});
function handleDisconnect(connection) {
    connection.on('error', function (err) {
        if (!err.fatal) {
            return;
        }
        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err;
        }

        console.log('Re-connecting lost connection: ' + err.stack);

        connection = mysql.createPool(conn.config);
        handleDisconnect(connection);
        connection.getConnection();
    });
}
handleDisconnect(connection);

router.get('/:id', (req, res, next) => {
    try {
        connection.query('SELECT * FROM shared_code WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) throw err;
            try{
                // console.log(rows[0].data);
                res.render('playground', { data: rows[0].data });
                res.end();
            }catch(err){
                console.log(err);
                res.redirect('/')
            }
        });
    }
    catch (err) {
        console.log(err);
        res.redirect('/')
    }
});
router.post('/', (req, res, next) => {
    try{
    let name = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15) + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15) + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);
    connection.query('INSERT INTO shared_code (id, data) VALUES (?,?)', [name, req.body.data], (err) => {
        if (err) throw err;
        res.send(name);
        res.end();
    })
    }
    catch(err){
        console.log(err);
        res.redirect('/')
    }


});
module.exports = router;