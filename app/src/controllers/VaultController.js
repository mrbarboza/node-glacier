const { Glacier } = require("aws-sdk");
require("../config");

const index = (req, res) => {
  const glacier = new Glacier();
  glacier.listVaults({ accountId: "-" }, (err, data) => {
    if (err) console.error(err, err.stack);
    else res.json(data.VaultList);
  });
};

const show = (req, res) => {
  const { vaultName } = req.params;

  const glacier = new Glacier();
  glacier.describeVault({ accountId: "-", vaultName }, (err, data) => {
    if (err) console.error(err, err.stack);
    else res.json(data);
  });
};

const store = (req, res) => {
  const { vaultName } = req.params;

  const glacier = new Glacier();
  glacier.createVault({ accountId: "-", vaultName }, (err, data) => {
    if (err) console.error(err, err.stack);
    else res.json(data);
  });
};

const destroy = (req, res) => {
  const { vaultName } = req.params;

  const glacier = new Glacier();
  glacier.deleteVault({ accountId: "-", vaultName }, (err, data) => {
    if (err) console.error(err, err.stack);
    else res.json(data);
  });
};

module.exports = {
  index,
  show,
  store,
  destroy,
};
