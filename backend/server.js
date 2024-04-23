const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

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


app.get("/donate", (req, res) => {
    const sql = "SELECT * from blood";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        return res.json(data);
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


// Updated backend code
// app.post("/search-blood", (req, res) => {
//     const { bloodGroup, city } = req.body;
//     const sql = "SELECT * FROM donor WHERE hosp_id IN (SELECT hosp_id FROM hospital WHERE city_id = ?) AND bg_id = ?";
//     db.query(sql, [city, bloodGroup], (err, data) => {
//         if (err) {
//             console.error('Error executing MySQL query: ' + err.stack);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }
//         return res.json(data);
//     });
// });

// Updated backend code
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
