import express from "express";
import router from "./routes/auth.js";

const app = express();

// route middleware
app.use("/api", router);

const port = 3005 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
