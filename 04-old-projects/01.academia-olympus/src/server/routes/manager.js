module.exports.post = function (req, res) {
  res.status(202).send(req.body);
};
