const express = require("express");
const fs = require("fs");

const routerProductos = require("./routerProductos");

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/api/productos", routerProductos);
app.use((req, res) => {
  const tmpFrontEnd = fs.readFileSync("./index.html", { encoding: "utf-8" });
  res.send(tmpFrontEnd);
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on(`error`, (error) => console.log(`Este es el error ${error}`));
