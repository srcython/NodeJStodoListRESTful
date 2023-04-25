const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8080;
const todoRouter = require("./routes/todo.route");

mongoose.connect("mongodb://0.0.0.0:27017/hw1", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Veritabanına Başarıyla Bağlandı ...");
    })
    .catch((err) => {
        console.log("Veritabanına Bağlanılamadı ... : " + err);
    })

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use("/todos", todoRouter);

app.listen(port, () => {
    console.log(`Server ${port} Portundan Başlatıldı ...`);
})