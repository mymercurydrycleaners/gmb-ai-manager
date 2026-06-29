const { generatePost } = require("./aiGenerator");
const { generateCaption } = require("./captionGenerator");
const { composePost } = require("./composer");
const { publishGooglePost } = require("./publisher");

async function createGooglePost(category = "tips") {

  const ai = await generatePost(category);

  if (!ai.success)
    return ai;

  const caption = generateCaption(ai.content);

  const post = composePost(caption, category);

  const published = await publishGooglePost(post);

  return {

    success: published.success,

    post,

    published

  };

}

module.exports = {
  createGooglePost
};

