const express = require("express");

const app = express();

app.use("/", express.static("public"));

app.listen("5173", () => {
  console.log("Simple static server is running on port 5173");
});
