const fs = require("fs");
const http = require('http');

// Function to get data from the JSON file
const datafromjson = (res, type) => {
    fs.readFile("./db.json", 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.end("Error reading data");
            return;
        }
        const jsonData = JSON.parse(data);
        res.end(JSON.stringify(jsonData[type]));
    });
};



const server = http.createServer((req, res) => {
    if (req.url === "/home" && req.method === "GET") {
        res.end("Welcome This is Home Page 🏠🏠");
    } 
    else if (req.url === "/about" && req.method === "GET") {
        res.end("This is About Page ✋✋");
    } 
    else if (req.url === "/getproductdata" && req.method === "GET") {
        datafromjson(res, 'products');
    } 
    else if (req.url === "/user" && req.method === "GET") {
        datafromjson(res, 'user');
    } 
    
    else {
        res.end('404 Not Found');
    }
});

server.listen(3030, () => {
    console.log("Server is running on port 3030");
});