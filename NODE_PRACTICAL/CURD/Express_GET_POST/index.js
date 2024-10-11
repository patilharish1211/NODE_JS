const express = require("express");

// fs Module
const fs = require("fs");

const app = express();
app.use(express.json()) // Middleware


app.get('/', (req, res) => {
    res.send("This is Home Page")
})

app.post('/addproduct', (req, res) => {

    // fs Module
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            const newData = JSON.parse(data);
            newData.products.push(req.body);
            console.log(newData);

            // fs Module
            fs.writeFile('./db.json', JSON.stringify(newData), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send("Data has been written to file");
                }
            })
        }
    })
})


app.listen(8080, () => {
    console.log("Server is running on port 8080");
})