const express = require('express');

const app = express()

const PORT = 3006

app.get("/",(req,res) =>{
    res.send("Welcome to Netflix Backend");
})

app.listen(PORT,()=>{
    console.log(`Server on running port ${PORT}`);
});