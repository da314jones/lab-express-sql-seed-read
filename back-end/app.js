const express = require('express');
const cors = require("cors");
const app = express();
const songsController = require("./controllers/songController.js")
app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

app.get("/", (req, res) => {
    res.send("Success express working!")
});

app.get("/*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "page not found" } });
});

module.exports = app;