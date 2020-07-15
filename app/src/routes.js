const { Router } = require("express");

const multer = require("multer");
const multerConfig = require("./config/multer");

const VaultController = require("./controllers/VaultController");

const ArchiveController = require("./controllers/ArchiveController");

const routes = Router();
const upload = multer(multerConfig);

routes.get("/", (req, res) => res.json({ message: "hello world" }));

routes.get("/vault", VaultController.index);
routes.get("/vault/:vaultName", VaultController.show);
routes.post("/vault/:vaultName", VaultController.store);
routes.delete("/vault/:vaultName", VaultController.destroy);

routes.post(
  "/archive/:vaultName",
  upload.single("archive"),
  ArchiveController.store
);

module.exports = routes;
