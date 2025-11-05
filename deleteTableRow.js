const con = require('./connection.js');

const sql="DELETE FROM Students WHERE id=3";
con.query(sql, (err, results) => {
    if (err) throw err;
    console.log("Course updated to Data Science!")
});


const select = "SELECT *  FROM Students";
con.query(select, (err, results) => {
    if (err) throw err;

    console.log("Students Records:");
    console.table(results); 
    con.end()
});