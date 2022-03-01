import express from "express";
import { readdirSync } from "fs";
import dotenv from "dotenv";

const morgan = require("morgan");

const app = express();

dotenv.config();

// middlewares
app.use(morgan("dev"));

// route middleware
readdirSync("./routes").map(r => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
