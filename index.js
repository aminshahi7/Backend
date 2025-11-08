const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.get("/test", (req, res)=>{
    res.json({ message: 'Hallo von Express Backend!' });
});

app.post("/api", (req, res)=>{
    const array = req.body.array;

    for(var a = 0; a < array.length; a++){
        console.log(array[a]);
    };

});



app.listen("5000", ()=>{
    console.log("Server is running on Port 5000");
})
