const oauth2Client = require("../google/client");
const { generateReply } = require("./replyGenerator");

async function autoReply(review, locationName) {

  try {

    const ai = await generateReply(review);

    if (!ai.success) {
      return ai;
    }

    const reviewName = review.name;

    await oauth2Client.request({

      method: "PUT",

      url:
        "https://mybusiness.googleapis.com/v4/" +
        reviewName +
        "/reply",

      data: {
        comment: ai.reply
      }

    });

    return {
      success: true,
      review: reviewName,
      reply: ai.reply
    };

  } catch (err) {

    return {
      success: false,
      error: err.message,
      details: err.response?.data || null
    };

  }

}

module.exports = {
  autoReply
};
