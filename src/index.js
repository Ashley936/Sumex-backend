const express = require("express");
const userRouter = require("./routes/user");
require("./db/mongoose");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server setup at 3000: ");
});