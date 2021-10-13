const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");
env.config();

const app = express();

const hsnRouter = require("./hsnRouter");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
});
mongoose.connection
  .once("open", function () {
    console.log("Connected to Mongo");
  })
  .on("error", function (err) {
    console.log("Mongo Error", err);
  });

app.use("/hsn", hsnRouter);

app.listen(3002, () => {
  console.log("Server is up and running at the port 3002");
});
