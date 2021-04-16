module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATH, DELETE")
    res.header("Access-Control-Allow-Hearders",
        "Origin, X-Requested-With, Content-Type, Accept")
    next()
}