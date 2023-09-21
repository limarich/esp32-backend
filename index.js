const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Conexão bem sucedida!");
});

app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
