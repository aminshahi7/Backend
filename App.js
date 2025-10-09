const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.get("/amin", (req, res)=>{
    res.send("Hallo Amin");
})



app.listen("5000", ()=>{
    console.log("Server is running on Port 5000");
})
