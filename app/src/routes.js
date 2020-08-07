const { Router } = require("express");

const multer = require("multer");
const multerConfig = require("./config/multer");

const VaultController = require("./controllers/VaultController");
const ArchiveController = require("./controllers/ArchiveController");
const JobController = require("./controllers/JobController");

const routes = Router();
const upload = multer(multerConfig);

routes.get("/stats", (req, res) => res.json({ message: "app is running" }));

routes.get("/vault", VaultController.index);
routes.get("/vault/:vaultName", VaultController.show);
routes.post("/vault/:vaultName", VaultController.store);
routes.delete("/vault/:vaultName", VaultController.destroy);

routes.post("/archive/:vaultName/:archiveId", JobController.store);
routes.post(
  "/archive/:vaultName/upload",
  upload.single("archive"),
  ArchiveController.store
);

module.exports = routes;
