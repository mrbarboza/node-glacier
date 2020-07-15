const aws = require("aws-sdk");

const fs = require("fs");
const path = require("path");

require("../config");

const store = (req, res) => {
  const { vaultName } = req.params;

  const glacier = new aws.Glacier();
  const archive = path.resolve(
    __dirname,
    "..",
    "..",
    "staging",
    req.file.filename
  );

  glacier.uploadArchive(
    { accountId: "-", vaultName, body: archive },
    (err, data) => {
      if (err) console.error(err, err.stack);
      else res.json(data);
    }
  );

  fs.unlink(archive, (err) => {
    if (err) console.error(err);
    console.log(`${archive} was deleted`);
  });
};

module.exports = {
  store,
};
