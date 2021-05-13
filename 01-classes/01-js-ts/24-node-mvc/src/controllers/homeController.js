exports.homePage = (req, res) => {
    res.render("index.ejs", {
        title: "<h1>Titulo</h1>",
        text: "lorem ipsum sit ament dollor",
        data: ["A", "B", "C", "D", "E"]
    })
}