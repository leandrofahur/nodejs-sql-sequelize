// const Users = require("./models/Users");
const UsersController = require("./controllers/UsersController");
const db = require("./config/db");
const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

db.authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.error(error.message));

// db.query("SELECT * FROM users")
//   .then((response) => {
//     console.log(response[0][1]);
//   })
//   .catch((error) => console.error(error));

app.get("/", UsersController.findAll);
app.post("/add", UsersController.addUser);

db.sync()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

const PORT = process.env.PORT | 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
