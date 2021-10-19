const express = require("express");
const routes = require("./routes");
const cors = require("./middlewares/cors");

const app = express();

app.use(cors);
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen("3003", () => {
  console.log("OK");
});
