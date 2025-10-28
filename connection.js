const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'alviya',
    password: 'Alviya@123',
    database: 'CollegeDB'  // select the database here
});

conn.connect((err) => {
    if (err) {
        console.error('Error connecting:', err.stack);
        return;
    }
    console.log('Connected to MySQL server and using CollegeDB');

    // Create database if it doesn't exist
    conn.query('CREATE DATABASE IF NOT EXISTS CollegeDB', (err) => {
        if (err) throw err;
        console.log('Database CollegeDB is ready.');
        // No conn.end() here, keep it open for other queries
    });
});

module.exports = conn;
