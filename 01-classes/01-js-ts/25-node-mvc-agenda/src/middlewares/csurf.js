const csurf = require("csurf")

function CsrfToken(req, res, next) {
    console.log(req.csrfToken);
    res.locals.csrfToken = req.csrfToken()
    next()
}

function checkCsrfToken(err, req, res, next) {
    if (err && "EBADCSRFTOKEN" === err.code)
        return res.render("error")
}

module.exports = app => {
    app.use(csurf({ cookie: true }))

    app.use(CsrfToken)

    app.use(checkCsrfToken)
}