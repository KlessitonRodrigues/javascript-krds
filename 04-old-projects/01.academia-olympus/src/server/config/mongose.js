const mongoose = require("mongoose");

const url = "mongodb://localhost:27018/academia-alympus";

const db = mongoose
  .connect(url, { useNewUrlParser: true })
  .then((res) => res)
  .catch((err) => console.log(err));

