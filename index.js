const express = require('express');
const app = express();
const port =4000

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

app.listen(port,()=>{
    console.log(`listening at port http://localhost:${port}`)
})