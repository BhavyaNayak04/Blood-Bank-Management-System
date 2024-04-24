const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.listen(8081, () => {
    console.log('Listening on port 8081');
});

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbms_blood'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});

app.get("/bgs",(req,res)=>{
    const sql = "SELECT * FROM blood";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(results);
        res.json(results);
    })
});

app.get("/hosps",(req,res)=>{
    const sql = "SELECT * FROM hospital";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(results);
        res.json(results);
    })
});

app.post("/donateBlood", (req, res) => {
    const { name, age, gender, bloodGroup, mobile, hospital } = req.body;
    const sql = "INSERT INTO donor (d_name, d_age, d_gender, bg_id, d_mobile, hosp_id) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, age, gender, bloodGroup, mobile, hospital], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.status(200).json({ message: 'Thank you for donating blood!' });
    });
});



app.post("/submit-feedback", (req, res) => {
    const { name, email, mobile, message } = req.body;
    const sql = "INSERT INTO feedback (f_name, f_email, f_phone, f_message) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, mobile, message], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.status(200).json({ message: 'Feedback submitted successfully!' });
    });
});



app.post("/search-blood", (req, res) => {
    const { bloodGroup, city } = req.body;
    const sql = `
        SELECT donor.*, hospital.hosp_name, hospital.hosp_add, hospital.city_id
        FROM donor
        INNER JOIN hospital ON donor.hosp_id = hospital.hosp_id
        WHERE donor.hosp_id IN (
            SELECT hosp_id FROM hospital WHERE city_id = ?
        ) AND donor.bg_id = ?
    `;
    db.query(sql, [city, bloodGroup], (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(data);
        return res.json(data);
    });
});


app.get("/cities", (req, res) => {
    const sql = "SELECT * FROM city";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});


app.get("/blood-groups", (req, res) => {
    const sql = "SELECT * FROM blood";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});


/*Admin thingy*/
app.get("/donor-details", (req, res) => {
    const sql = `
        SELECT donor.*, hospital.hosp_name AS hospital_name, city.city_name AS city_name
        FROM donor
        INNER JOIN hospital ON donor.hosp_id = hospital.hosp_id
        INNER JOIN city ON hospital.city_id = city.city_id
    `;
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});

app.delete("/donor-details/:id", (req, res) => {
    const donorId = req.params.id;
    const sql = "DELETE FROM donor WHERE d_id = ?";
    db.query(sql, [donorId], (err, result) => {
        if (err) {
            console.error('Error deleting donor:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log('Donor deleted successfully');
        return res.status(200).json({ message: 'Donor deleted successfully' });
    });
});

app.get("/feedbacks", (req, res) => {
    const sql = "SELECT * FROM feedback";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(data);
        return res.json(data);
    });
});

app.delete("/feedbacks/:id", (req, res) => {
    const feedbackId = req.params.id;
    const sql = "DELETE FROM feedback WHERE f_id = ?";
    db.query(sql, [feedbackId], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(`Feedback with ID ${feedbackId} deleted successfully`);
        return res.json({ message: 'Feedback deleted successfully' });
    });
});

app.get("/total-donors", (req, res) => {
    const sql = "SELECT COUNT(*) AS total_donors FROM donor";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data[0]); // Return the first row of the result (contains total donors)
    });
});

// Endpoint to fetch total number of queries
app.get("/total-queries", (req, res) => {
    const sql = "SELECT COUNT(*) AS total_queries FROM feedback";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data[0]); // Return the first row of the result (contains total queries)
    });
});

// Server.js

// Add a new endpoint to fetch all hospital IDs and names
app.get("/hospitals", (req, res) => {
    const sql = "SELECT hosp_id, hosp_name FROM hospital";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data); // Return the result containing hospital IDs and names
    });
});

const adminCredentials = {
    username: 'bloodadmin',
    password: 'admin123',
  };

  app.use(bodyParser.json());

  app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        console.log('logged in successfully!');
        res.status(200).json();
      
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });











