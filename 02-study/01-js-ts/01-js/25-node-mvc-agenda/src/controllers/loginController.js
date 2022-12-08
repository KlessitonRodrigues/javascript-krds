module.exports.index = (req, res) => {
    res.locals.csrfToken = req.csrfToken()
    res.render("login")
}