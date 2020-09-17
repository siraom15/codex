var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'remotemysql.com',
    port: 3306,
    user: 'mKUsVS9x6G',
    password: 'wGN54WmUBz',
    database: 'mKUsVS9x6G'
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
    connection.query('SELECT * FROM shared_code WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.render('playground', { data: rows[0].data });
        res.end();
    });
});
router.post('/', (req, res, next) => {
    let name = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);
    connection.query('INSERT INTO shared_code (id, data) VALUES (?,?)', [name, req.body.data], (err) => {
        if (err) throw err;
        res.send(name);
        res.end();
    })


});
module.exports = router;