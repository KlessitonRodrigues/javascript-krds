const express = require("express")
const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.json")

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader)
        return res.status(401).send({ error: "No token provided" })

    const parts = authHeader.split(" ")

    if (parts.length !== 2)
        return res.status(401).send({ error: "invalid token format" })

    const [schema, token] = parts

    if (!/^Bearer$/i.test(schema))
        return res.status(401).send({ error: "invalid token format 2" })

    jwt.verify(token, authConfig.secret, (err, decode) => {
        if (err)
            return res.status(401).send({ error: "invalid token" })

        req.userId = decode.id
        return next()
    })
}