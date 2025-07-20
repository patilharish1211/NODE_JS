const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {

    if (req.url == "/home") {
        res.end("<h1>jeel patel</h1>")
    } else if (req.url == "/about") {
        res.end("<h1>this is about page</h1>")
    } else if (req.url == "/getproductdata") {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) res.end(err)
            let jsonData = JSON.parse(data)
            res.end(JSON.stringify(jsonData.products))
        })
    } else if (req.url == "/user") {
        fs.readFile("./db.json", "utf-8", (err, data) => {
            if (err) res.end(err)
            let jsonData = JSON.parse(data)
            res.end(JSON.stringify(jsonData.user))

        })
    }
})

server.listen(5253, () => {
    console.log("listing a jeel patel")
})