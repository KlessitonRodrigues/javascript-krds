const express = require("express");
// const db = require("./config/mongo")
// const mongoose = require("./config/mongose");

const app = express();

/* Middlewares */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("dist"));

/* Routes */
require("./routes")(app);

app.listen(3000);
