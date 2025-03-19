const express = require("express");
const loggerMiddleware = require("./middlewares/loggerMiddleware.js");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({error: 'Internal Server Error'});
});



