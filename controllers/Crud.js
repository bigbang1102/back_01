const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'crud'
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Database Connected');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/products', (req, res) => {
    const { name, quantity } = req.body;


    const sql = `INSERT INTO products (name, quantity) VALUES ('${name}', ${quantity})`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Product added successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});