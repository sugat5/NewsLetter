require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const route = express.Router();
const emailFrom = process.env.EMAIL;
const password = process.env.PASSWORD;
const Email = require("../schemas/mail");
const User = require("../schemas/user");

const options = {
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: emailFrom,
    pass: password,
  },
};
const transporter = nodemailer.createTransport(options);
route.post("/", jsonParser, async (req, res) => {
  let newMail = new Email({ ...req.body });
  await newMail.save();

  const users = await User.find({});
  const toMail = users.map((user) => user.email);
  // send mail with defined transport object
  let mailOptions = {
    from: emailFrom,
    to: toMail,
    subject: newMail.subject,
    text: newMail.content,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error);
      res.status(400).send("Email delivery failed", error);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

module.exports = route;
