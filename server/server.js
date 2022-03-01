import express from "express";

const app = express();

app.get("/api/:message", (req, res) => {
  res.status(200).send(req.params.message);
});

const port = 3005 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
