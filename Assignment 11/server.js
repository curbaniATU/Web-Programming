require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

app.get("/personal_info", async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM personal_info")
        res.json(result.rows);
    } catch(err) {
        console.error(err.message)
        res.status(500).send("Server Error!");
    }
});

app.get("/hobbies", async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM hobbies")
        res.json(result.rows);
    } catch(err) {
        console.error(err.message)
        res.status(500).send("Server Error!");
    }
});

app.post("/personal_info", async(req, res) => {
    try {
        const {name, birthday, email} = req.body;

        const result = await pool.query(
            "INSERT INTO personal_info (name, birthday, email) VALUEs ($1,$2,$3) RETURNING *",
            [name, birthday, email]
        );
        res.status(201).json(result.rows[0]);

    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

app.post("/personal_info", async(req, res) => {
    try {
        const {name, birthday, email} = req.body;

        const result = await pool.query(
            "INSERT INTO personal_info (name, birthday, email) VALUEs ($1,$2,$3) RETURNING *",
            [name, birthday, email]
        );
        res.status(201).json(result.rows[0]);

    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

app.post("/hobbies", async(req, res) => {
    try {
        const {activity, description} = req.body;

        const result = await pool.query(
            "INSERT INTO hobbies (activity, description) VALUEs ($1,$2) RETURNING *",
            [activity, description]
        );
        res.status(201).json(result.rows[0]);

    } catch(err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
});

app.use(express.json());

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));