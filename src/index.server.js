const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const { connect } = require("mongoose");
const session = require("express-session");

// const indexRoutes = require("./routes/index");
const categoryRoutes = require("./routes/category");

const userRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

env.config();

app.use(
  session({
    secret: "hello world",
  })
); // req.session

connect("mongodb+srv://Aloni:1234@cluster0.xfwelvs.mongodb.net/BLAGAN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    console.log("we are now connected to the db");
  },
  (err) => {
    console.log(`we failed to connect to the db: ${err.message}`);
  }
);

app.use(express.urlencoded({ extended: false }));

app.post("/api/api", function (req, res) {
  res.status(400).json({
    message: "Invalid Password",
  });
});

app.use(express.json());

// app.get("/dynamic", function (req, res) {
//   res.json({
//     message: "aasass",
//   });
// });

app.use("/api", categoryRoutes);
app.use("/api", userRoutes);
app.use("/api", adminRoutes);

// mongodb+srv://<username>:<password>@cluster0.xfwelvs.mongodb.net/?retryWrites=true&w=majority

app.listen(2000, () => {
  console.log(`server is running in port ${process.env.PORT}`);
});
