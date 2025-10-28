const con = require('./connection.js');

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30),
        age INT,
        course VARCHAR(10)
    )
`;

con.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log('Table Students created!');
    con.end(); // close connection here
});
