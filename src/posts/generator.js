const templates = require("./templates");

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generatePost(type = "tips") {

  let post;

  switch (type) {

    case "offers":
      post = random(templates.offers);
      break;

    case "festivals":
      post = random(templates.festivals);
      break;

    case "announcements":
      post = random(templates.announcements);
      break;

    case "tips":
    default:
      post = random(templates.tips);

  }

  return {
    success: true,
    category: type,
    title: post.title,
    body: post.body,
    hashtags: [
      "#DryCleaning",
      "#MercuryDryCleaners",
      "#FabricCare",
      "#ProfessionalCleaning"
    ],
    createdAt: new Date().toISOString()
  };
}

module.exports = {
  generatePost
};
