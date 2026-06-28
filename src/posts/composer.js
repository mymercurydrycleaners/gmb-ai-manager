id="q0d9st"
const { getHashtags } = require("./hashtags");
const { getCTA } = require("./cta");

function composePost(post, category) {

  return {

    success: true,

    title: "My Mercury Dry Cleaners",

    body: post,

    hashtags: getHashtags(category),

    cta: getCTA(),

    createdAt: new Date().toISOString()

  };

}

module.exports = {
  composePost
};
