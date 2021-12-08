const Express = require("express");
const cors = require("cors");

const app = Express();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(cors);
app.listen(3001);

app.use((req, res) => {
  console.log(req);
  return res.send("ok")
});
