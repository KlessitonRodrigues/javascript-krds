exports.homePage = (req, res) => {
    res.render("index.ejs", {
        title: "HomePage",
        text: "<small>lorem ipsum sit ament dollor</small>",
        data: ["A", "B", "C", "D", "E"]
    })
}