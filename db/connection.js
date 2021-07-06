const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // SQL username
    user: 'root',
    //Your MySQL password
    password: 'Abudeepu#1988',
    database: 'election'
  },
  console.log('Connected to election database')
);

module.exports = db;