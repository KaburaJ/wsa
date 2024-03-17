require("dotenv").config();
require("./models/wsa.model").default
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

const app = express();
const cors = require("cors");
app.use("/", require("./controllers/wsa.controller"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req,res) => res.send("WSA"));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server listening on port " + port));
