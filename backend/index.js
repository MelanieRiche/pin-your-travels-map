const express = require("express");
const mongoose = require("mongoose");
const app = express();

require('dotenv').config()
mongoose
.connect(process.env.MONGO_URL, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => {
    console.log("MongoDb is connected!");
}).catch((e) => console.log(e));

app.post("/pins")

app.listen(8800, () => {
    console.log("Backend server is running!");
});