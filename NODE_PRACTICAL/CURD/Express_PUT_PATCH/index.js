const express = require("express");

// fs Module
const fs = require("fs");

const app = express();
app.use(express.json()) // Middleware

const dataFile = "db.json";

app.put('/data/:id', (req, res) => {
    const id = req.params.id;

    // fs Module
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let jsonData = JSON.parse(data);

            // Find the item to update
            const itemToUpdate = jsonData.find(item => item.id === parseInt(id));

            if (itemToUpdate) {
                // Update properties based on request body
                Object.assign(itemToUpdate, req.body);

                // Write updated data back to file
                fs.writeFileSync(dataFile, JSON.stringify(jsonData, null, 2));

                res.send('Data updated successfully');
            } else {
                res.send('Item not found');
            }
        }
    });
})

app.patch('/data/:id', (req, res) => {
    const id = req.params.id;
    // fs Module
    fs.readFile(dataFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let jsonData = JSON.parse(data);

            // Find the item to update
            const itemToUpdate = jsonData.find(item => item.id === parseInt(id));

            if (itemToUpdate) {
                // Update properties based on request body
                Object.assign(itemToUpdate, req.body);

                // Write updated data back to file
                fs.writeFileSync(dataFile, JSON.stringify(jsonData, null, 2));

                res.send('Data updated successfully');
            } else {
                res.send('Item not found');
            }
        }
    });
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})