const templates = require("./templates");

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePost(type = "tips") {

  switch (type) {

    case "offers":
      return randomItem(templates.offers);

    case "festivals":
      return randomItem(templates.festivals);

    case "announcements":
      return randomItem(templates.announcements);

    case "tips":
    default:
      return randomItem(templates.tips);

  }

}

module.exports = {
  generatePost
};
