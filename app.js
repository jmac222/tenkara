require("dotenv").config();
require("express-async-errors");


const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const uploadRoute = require('./routes/uploadRoute')




app.use(express.json());

app.use(express.static("./public"));
// app.use(fileUpload({useTempFiles: true}))
app.get("/", (req, res) => {
  res.send("<h1>File</h1>");
});

app.use('/api/v1/upload', uploadRoute)


const port = process.env.PORT || 3000;
const start = async () => {
    try {
        connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server listening at ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};
start();