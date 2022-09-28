const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const { connect } = require("mongoose");
const userRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

env.config();

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

app.use(bodyParser());
app.use("/api", userRoutes);
app.use("/api", adminRoutes);

// mongodb+srv://<username>:<password>@cluster0.xfwelvs.mongodb.net/?retryWrites=true&w=majority

app.listen(2000, () => {
  console.log(`server is running in port ${process.env.PORT}`);
});
