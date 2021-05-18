const Users = require("../models/Users");

exports.findAll = (req, res) => {
  try {
    Users.findAll()
      .then((response) => {
        res.status(200).json({
          path: "/",
          users: response,
        });
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      path: "/",
      error: error,
    });
  }
};

exports.addUser = (req, res) => {
  try {
    Users.create({
      id: 4,
      username: "admin",
      email: "admin@email.com",
    })
      .then((response) => {
        res.status(200).json({
          path: "/add",
          users: response,
        });
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      path: "/add",
      error: error,
    });
  }
};
