const con = require('./connection.js');

const update ="UPDATE Students SET course ='Data Science' WHERE id=2";
con.query(update, (err, results) => {
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