const express = require("express");
const app = express();
const port = 3001;

app.get("/",(req,res) =>{
    res.send("RMUTL Express !!!!");
});

app.listen(port,() => {
    console.log(`Express Sever Run at http://localhost:${port}`);

});
