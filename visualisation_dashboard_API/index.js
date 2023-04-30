const express = require("express");
const port =5000;
const mongooseConnect = require('./database');
const dashboardDataRoute = require("./routes/dashboardDataRoute");

mongooseConnect();

const app = express();

app.use(express.json())


app.use("/api/visualData",dashboardDataRoute);

app.listen(port,()=>{
    console.log("Netflix server running on port "+port);
    
})