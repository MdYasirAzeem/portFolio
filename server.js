const express = require("express");

const port = 8000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(port, console.log(`Server started on ${port}`));
