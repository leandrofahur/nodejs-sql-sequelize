const path = require("path");
const express = require("express");
const expressHandlebars = require("express-handlebars");

const db = require("./config/db");

// Test db:
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

const app = express();
app.use(express.json({ extended: false }));
app.use("/gigs", require("./routes/gigs"));

app.get("/", (req, res) => {
  res.send("INDEX");
});

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
