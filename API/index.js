require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const bodyParser = require("body-parser");
const app = express();
const mongoDB = process.env.DB;
const port = process.env.PORT;
const jsonParser = bodyParser.json();
const User = require("./schemas/user");
const dataBase = mongoose.connect(mongoDB);
const mailRoute = require("./routes/mail");
app.use("/email", mailRoute);


app.post("/subscribe" ,jsonParser, async (req, res) => {
  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res
      .status(400)
      .send({
        error:
          "User exists,you can try different email to receive Newsletter's",
      });
  }
  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save();
    res.status(200).send("User Subscribed Successfully");
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.get("/", (req, res) => {
  res.status(200).send("I AM SERVER");
});

dataBase
  .then(() => {
    app.listen(port, () =>
      console.log(`Server Started and connected to DATABASE`)
    );
  })
  .catch((e) => console.log(e));


  