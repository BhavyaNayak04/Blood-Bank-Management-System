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
