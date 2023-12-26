import express from "express";

const app = express();

const PORT = 9000;

app.get("/", (req, res) => {
  res.send({ name: "Faisal" });
});

app.listen(PORT, () => {
  console.log(`[server]: app alive on http:localhost:${PORT}`);
});
