module.exports.get = (req, res) => {
  res.send("auth ok");
};

module.exports.post = (req, res) => {
  res.send(JSON.stringify(req.body));
};
