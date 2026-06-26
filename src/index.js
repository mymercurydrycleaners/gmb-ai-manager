require("dotenv").config();

const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const rateLimit = require("express-rate-limit");

const morgan = require("morgan");

const routes = require("./routes");

const logger = require("./utils/logger");

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use(rateLimit({

windowMs: 15 * 60 * 1000,

max: 100

}));

app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {

logger.info(

`Mercury GMB AI Manager running on ${PORT}`

);

});
