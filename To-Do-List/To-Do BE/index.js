const express = require("express");
const cors=require("cors")
const app = express();
const fs = require("fs");


app.use(
    express.json(),
    cors()
);


// Read
app.get("/data", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    else {
      res.send(data);
    }
  });
});


// Create
app.post("/addData", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    else {
      const newData = req.body;
      const jsonData = JSON.parse(data);
      jsonData.push(newData);
      fs.writeFile("./db.json", JSON.stringify(jsonData), (err) => {
        if (err) res.send(err);
        else res.send("Data saved successfully");
      });
    }
  });
});


// Update
app.patch("/patchdata/:id", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    else {
      
      const getid = req.params.id;

      const newData = req.body;
      const jsonData = JSON.parse(data);
      


      let index = jsonData.findIndex((e) => e.id == getid);
  

      jsonData[index] = { ...jsonData[index], ...req.body };


      fs.writeFile("./db.json", JSON.stringify(jsonData), (err) => {
        if (err) res.send(err);
        else res.send("Data Chenge successfully");
      });
    }
  });
});

 
app.delete(`/deletedata/:id`, (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) res.send(err);
    else {
        const {id}=req.params
        console.log(id)
        const jsonData=JSON.parse(data)
        const updatedData=jsonData.filter((e)=>e.id!=id)


        fs.writeFile("./db.json", JSON.stringify(updatedData), (err) => {
            if (err) res.send(err);
            else res.send(updatedData);
          });
    }
  });
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});


