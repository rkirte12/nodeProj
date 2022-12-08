const util = require("util");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.join(`${__dirname}/../../upload`));
    },
    filename: (req, file, callback) => {
      const match = ["application/csv", "application/zip"];
  
      if (match.indexOf(file.mimetype) === -1) {
        var message = `${file.originalname} is invalid. Only accept csv/zip.`;
        return callback(message, null);
      }
  
      var filename = `${Date.now()}-bezkoder-${file.originalname}`;
      callback(null, filename);
    }
  });
  
  var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
  var uploadFilesMiddleware = util.promisify(uploadFiles);
  module.exports = uploadFilesMiddleware;