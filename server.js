const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("IOE-Hub API is running ");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});