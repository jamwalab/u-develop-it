const express = require('express');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

/*db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});*/

//Get a single candidate
/*db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
  if (err) {
    console.log(err);
  }
  console.log(row);
});*/

//Delete Candidate
/*db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
})*/

// Create a candidate
/*const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});*/

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});