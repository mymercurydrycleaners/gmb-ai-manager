const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "../../assets/posts");

function getCategories() {

  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs.readdirSync(POSTS_DIR).filter((item) => {
    return fs.statSync(path.join(POSTS_DIR, item)).isDirectory();
  });

}

function getImages(category) {

  const folder = path.join(POSTS_DIR, category);

  if (!fs.existsSync(folder)) {
    return [];
  }

  return fs.readdirSync(folder).filter((file) => {

    return (
      file.endsWith(".jpg") ||
      file.endsWith(".jpeg") ||
      file.endsWith(".png") ||
      file.endsWith(".webp")
    );

  });

}

function getLibraryStatus() {

  const categories = getCategories();

  const result = {};

  categories.forEach((category) => {

    result[category] = {
      total: getImages(category).length,
      files: getImages(category)
    };

  });

  return {
    success: true,
    categories: result
  };

}

module.exports = {
  getLibraryStatus,
  getCategories,
  getImages
};

