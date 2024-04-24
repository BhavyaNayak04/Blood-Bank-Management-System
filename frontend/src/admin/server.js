// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'blood_bank',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());

// CRUD operations for blood donors
app.get('/donors', (req, res) => {
  const sql = 'SELECT * FROM donors';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.post('/donors', (req, res) => {
  const { name, bloodType, contact } = req.body;
  const sql = 'INSERT INTO donors (d_name, bg_id, mobile) VALUES (?, ?, ?)';
  db.query(sql, [name, bloodType, contact], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Donor added successfully' });
  });
});

app.put('/donors/:id', (req, res) => {
  const { id } = req.params;
  const { name, bloodType, contact } = req.body;
  const sql = 'UPDATE donors SET name=?, bloodType=?, contact=? WHERE id=?';
  db.query(sql, [name, bloodType, contact, id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Donor updated successfully' });
  });
});

app.delete('/donors/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM donors WHERE id=?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Donor deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
