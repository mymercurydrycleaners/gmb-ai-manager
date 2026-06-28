const fs = require("fs");
const path = require("path");

function validateImage(imagePath) {

  const fullPath = path.resolve(imagePath);

  if (!fs.existsSync(fullPath)) {

    return {
      success: false,
      message: "Image not found."
    };

  }

  const stats = fs.statSync(fullPath);

  if (stats.size === 0) {

    return {
      success: false,
      message: "Image is empty."
    };

  }

  return {
    success: true,
    size: stats.size,
    path: fullPath
  };

}

module.exports = {
  validateImage
};
