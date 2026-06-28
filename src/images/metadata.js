const path = require("path");
const { validateImage } = require("./validator");

function getMetadata(image) {

  if (!image) {

    return {
      success: false,
      message: "No image selected."
    };

  }

  const validation = validateImage(image.relativePath);

  if (!validation.success) {
    return validation;
  }

  const extension = path.extname(image.filename);

  return {
    success: true,

    filename: image.filename,

    category: image.category,

    extension,

    relativePath: image.relativePath,

    size: validation.size,

    uploaded: false,

    createdAt: new Date().toISOString()
  };

}

module.exports = {
  getMetadata
};
