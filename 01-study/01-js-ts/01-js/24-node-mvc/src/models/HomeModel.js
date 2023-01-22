const restiful = require("node-restful")
const mongoose = restiful.mongoose

const homeSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = restiful.model("Home", homeSchema)