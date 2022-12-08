const csrfProtection = require("csurf")

function checkCsrfToken(err, req, res, next) {
    if (err && "EBADCSRFTOKEN" === err.code)
        return res.render("error")
}

module.exports = app => {
    app.use(csrfProtection({ cookie: true }))
    app.use(checkCsrfToken)
}