// HTTP Module
const http = require("http");

// fs Module
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method == "POST" && req.url == '/home') {
        res.end("<h1>This is Home Page</h1>")
    } else if (req.method == "POST" && req.url == '/about') {
        res.end("<h1>This is About Page</h1>")
    } else if (req.method == "POST" && req.url == '/addproduct') {

        let str = ""
        req.on("data", (chunk) => {
            str += chunk
        })

        req.on("end", () => {
            // fs Module
            fs.readFile("./db.json", 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const dataFromServer = JSON.parse(data);
                    dataFromServer.push(JSON.parse(str))
                    
                    fs.writeFile("./db.json", JSON.stringify(dataFromServer), (err) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log("Data Added Successfully.")

                        }
                    })
                    res.end("ok")
                }
            })
        })
    }
})

server.listen(8080, () => {
    console.log("Server is running on port 8080.")
})