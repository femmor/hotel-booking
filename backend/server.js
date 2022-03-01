import express from "express";
import { readdirSync } from "fs";

const app = express();

// route middleware
readdirSync("./routes").map(r => app.use("/api", require(`./routes/${r}`)));

const port = 3005 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
