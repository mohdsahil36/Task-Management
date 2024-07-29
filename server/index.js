const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const UserModel = require("./model/Users");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongoDBURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors());

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.status(400).json("The password is incorrect");
        }
      } else {
        res.status(404).json("No record existed");
      }
    })
    .catch(err => {
      console.error("Error finding user:", err);
      res.status(500).json("An error occurred. Please try again.");
    });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => {
      console.error("Error creating user:", err);
      res.status(500).json("An error occurred. Please try again.");
    });
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
