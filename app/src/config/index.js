const aws = require("aws-sdk");

require("dotenv").config();

const awsConfig = aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_DEFAULT_REGION,
  apiVersion: process.env.AWS_GLACIER_API_VERSION,
});

module.exports = awsConfig;
