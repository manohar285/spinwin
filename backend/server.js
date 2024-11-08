require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Todolists = require("./routes/todolist");
const userRoutes = require("./routes/user");
// const { default: mongoose } = require("mongoose");
// const bodyParser = require("body-parser")

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())

// routes
app.use("/api/todolists", Todolists);
app.use("/api/user", userRoutes);


// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
