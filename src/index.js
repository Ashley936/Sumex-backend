const express = require("express");
const userRouter = require("./routes/user");
const cors = require("cors");
require("./db/mongoose");

const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server setup at 3000: ");
});
