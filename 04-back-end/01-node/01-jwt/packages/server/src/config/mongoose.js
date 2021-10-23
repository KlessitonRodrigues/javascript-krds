const mongoose = require("mongoose");

const url = "mongo://27018/jwt";

function startConnection() {
  mongoose.connect(url);
}

