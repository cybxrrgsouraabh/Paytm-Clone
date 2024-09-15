const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser")
const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/api/vi/user", mainRouter);


app.listen(3001);