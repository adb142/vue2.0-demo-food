var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456x&X',
    database: 'foods',
    connectionLimit: 10
});



function queryDB(callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            callback(null, error);
        } else {
            callback(connection, null);
        }
    });
}

exports.queryDB=queryDB;
