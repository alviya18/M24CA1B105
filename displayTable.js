const con = require('./connection.js'); // must have database set

const sql = "SELECT * FROM Students";

con.query(sql, (err, results) => {
    if (err) throw err;

    console.log("Students Records:");
    console.table(results); // nicely prints results in table format

    con.end(); // close the connection
});
