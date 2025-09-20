const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("servidor funcionando");
});

app.get("/", (req, res) => {
  res.send("servidor funcionando");
});
