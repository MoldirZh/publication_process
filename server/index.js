const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "publication",
})

app.post("/register", (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    db.query(
        "INSERT INTO users (email, password, firstName, lastName) VALUES (?,?,?,?)",
        [email, password, firstName, lastName], 
        (err, result) => {
            console.log("insert", err, result);
        }
    );
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password], 
        (err, result) => {
            if(err) {
                res.send({ err: err  })
            }
            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong email/password" })
            }
        }
    );
})

app.listen(3001, () => {
    console.log("running");
}) 