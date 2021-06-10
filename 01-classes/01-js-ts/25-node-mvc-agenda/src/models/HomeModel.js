const mongoose = require("mongoose")

const homeSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = restiful.model("Home", homeSchema)