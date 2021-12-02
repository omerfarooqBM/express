const express = require("express");
const app = express();
app.get("/", (req, res) => {

    res.send("response arha hai")

})

app.listen(3000, () => {
    console.log("apkay bhai ka server chl rha hai")
})