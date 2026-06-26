require("dotenv").config();

const express = require("express");
const config = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(config.PORT, () => {
  console.log(`✅ GMB AI Manager running on port ${config.PORT}`);
});
