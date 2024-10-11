const express = require("express");

// fs Module
const fs = require("fs");

const app = express();
app.use(express.json()) // Middleware

const dataFile = "db.json";

app.delete('/data/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);

    // fs Module
    fs.readFile(dataFile, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let jsonData = JSON.parse(data);

            // Filter out the item to delete
            jsonData = jsonData.filter(item => item.id !== idToDelete);

            fs.writeFile(dataFile, JSON.stringify(jsonData), (err) => {

                if (err) {
                    res.send('Error deleting data');
                }
                res.send('Data deleted successfully');
            });
        }
    });
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})