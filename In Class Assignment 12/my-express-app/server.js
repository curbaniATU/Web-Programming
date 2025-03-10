const express = require("express");
const app = express();

const user = [
    {id: 1, name:"Alice"},
    {id:2, name:"Bob"}
];

const products = [
    {id:1, name:"Laptop", price:999},
    {id:2, name:"Phone", price:699},
];

const companies = [
    {id:1, name:"Big Business", ceo:"Jerry"},
    {id:2, name:"Small Business", ceo:"Doug"},
];

const ceo = [
    {id: 1, name:"Jerry", yearsWorked: 5},
    {id: 2, name:"Doug", yearsWorked: 23},
];

const locations = [
    {id:1, name:"Arkansas", city:"Conway"},
    {id:2, name:"California", city:"San Francisco"},
];

const industries = [
    {id:1, name:"Food", jobs: "chef"},
    {id:2, name:"Real Estate", jobs: "realtor"}
]

app.get("/", (req, res) => res.send("Welcome to my API!"));
app.get("/users", (req,res) => res.json(user));
app.get("/products", (req, res) => res.json(products));
app.get("/companies", (req, res) => res.json(companies));
app.get("/ceo", (req, res) => res.json(ceo));
app.get("/locations", (req, res) => res.json(locations));
app.get("/industries", (req, res) => res.json(industries))

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))