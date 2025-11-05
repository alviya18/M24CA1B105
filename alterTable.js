const con = require('./connection.js');

const alterTableQuery = "ALTER TABLE Students MODIFY course VARCHAR(30)";

con.query(alterTableQuery, (err) => {
    if (err) throw err;
    console.log('Table Students course size Changed!');
    con.end(); // close connection here
});