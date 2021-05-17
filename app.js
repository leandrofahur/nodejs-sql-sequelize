const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const database = require("./util/database");
const Product = require("./models/product");

// Test db:
database
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.error(error.message));

// testing with a query:
database
  .query("SELECT * FROM products")
  .then((result) => console.log(result[0]))
  .catch((error) => console.error(error.message));

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { error } = require("console");
const { compile } = require("pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
