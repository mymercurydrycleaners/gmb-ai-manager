const { getImages } = require("./manager");

const usedImages = new Set();

function resetSelection() {
  usedImages.clear();
}

function getRandomImage(category) {

  const images = getImages(category);

  if (images.length === 0) {
    return null;
  }

  const available = images.filter((img) => {
    return !usedImages.has(category + "/" + img);
  });

  if (available.length === 0) {

    resetSelection();

    return getRandomImage(category);

  }

  const image =
    available[Math.floor(Math.random() * available.length)];

  usedImages.add(category + "/" + image);

  return {
    category,
    filename: image,
    relativePath: `assets/posts/${category}/${image}`
  };

}

module.exports = {
  getRandomImage,
  resetSelection
};

