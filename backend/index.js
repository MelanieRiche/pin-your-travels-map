const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

require('dotenv').config();
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => {
    console.log("MongoDb is connected!");
}).catch((e) => console.log(e));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});