const express = require("express");
const app = express();
const config = require("./config");
const connect = require("./loaders/mongodb");
const bookRoutes = require("./routes");

//console.log(config);
config();
connect();

app.use(express.json());

app.listen(5000, () => {
  console.log(`Application is running...`);
  //app.use("/users", UserRoutes);
  app.use("/phones", bookRoutes);
  app.get("/", (req, res) => {
    res.status(400).json({ message: "hello" });
  });
});
