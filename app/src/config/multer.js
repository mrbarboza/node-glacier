const multer = require("multer");
const path = require("path");
const crypto = require("crypto-js");

module.exports = {
  storage: multer.diskStorage({
    destination: `${path.resolve(__dirname, "..", "..", "staging")}`,
    filename: (request, file, callback) => {
      const filename = `${crypto.SHA256(file)}.csv`;

      callback(null, filename);
    },
  }),
};
