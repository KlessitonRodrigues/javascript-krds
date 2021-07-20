module.exports.index = (req, res) => {
    console.log(req.csurfToken)
    res.render("login")
}