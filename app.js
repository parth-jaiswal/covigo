const express = require('express');
const path  = require ('path');
const http = require('http');

const app = express();
app.use(express.static(__dirname+"/public"));

app.get("/",(req, res) =>{
    res.sendFile('index.html' );
} );

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
