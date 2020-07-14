const { Router } = require("express");
const {
  index,
  show,
  store,
  destroy,
} = require("./controllers/VaultController");

const routes = Router();

routes.get("/", (req, res) => res.json({ message: "hello world" }));

routes.get("/vault", index);
routes.get("/vault/:vaultName", show);
routes.post("/vault/:vaultName", store);
routes.delete("/vault/:vaultName", destroy);

module.exports = routes;
