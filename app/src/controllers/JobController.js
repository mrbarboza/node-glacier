const aws = require("aws-sdk");
const { Glacier } = require("aws-sdk");

require("../config");

const show = (req, res) => {
  const { vaultName, archiveId } = req.params;

  const jobParameter = {
    jobParameters: {
      Type: "select",
      ArchiveId: archiveId,
      // TODO: How much cost to use Tier: Expedited
      // Tier: 'Expedited',
      SelectParameters: {
        InputSerialization: {
          csv: {
            FileHeaderInfo: "NONE",
          },
        },
        ExpressionType: "SQL",
        Expression: "SELECT * FROM archive",
        OutputSerialization: {
          csv: {
            QuoteFields: "ASNEEDED",
          },
        },
      },
      OutputLocation: {
        S3: {
          BucketName: "node-glacier-staging",
          Prefix: "1",
        },
      },
    },
  };

  const glacier = new Glacier();
  glacier.initiateJob(
    { accountId: "-", vaultName, ...jobParameter },
    (err, data) => {
      if (err) res.status(500).json(err.message);
      else res.json(data);
    }
  );
};

module.exports = {
  show,
};
