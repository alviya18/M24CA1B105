const con = require('./connection.js');

// SQL query to insert one record
const sql = "INSERT INTO Students (name, age, course) VALUES ('Ram', 20, 'CS')";

con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Record inserted successfully!');
    con.end(); // close the connection
});
