const billingCycle = require("./billingCycle")
const errorHandler = require("../common/errorHandler")

billingCycle.methods(["get", "post", "put", "delete"])
billingCycle.updateOptions({ new: true, runValidators: true })

billingCycle.route("count", (req, res, next) => {
    billingCycle.count((err, value) => {
        err
            ? res.status(500).json({ errors: [err] })
            : res.json({ value })
    })
})

billingCycle
    .after("push", errorHandler)
    .after("put", errorHandler)

billingCycle.route("summary", (req, res, next) => {
    billingCycle.aggregate([{
        $project: {
            credit: { $sum: "$credits.value" },
            debt: { $sum: "$debts.value" }
        },
    }, {
        $group: {
            _id: null,
            credit: { $sum: "$credit" },
            debt: { $sum: "$debt" }
        }
    }, {
        $project: {
            _id: 0,
            credit: 1,
            debt: 1
        }
    }], (err, result) => {
        err
            ? res.status(500).json({ errors: [err] })
            : res.json(result[0] || { credit: 0, debit: 0 })
    })
})

module.exports = billingCycle