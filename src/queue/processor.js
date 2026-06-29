 id="e2k7hf"
const { generateReply } = require("../reviews/replyGenerator");
const { publishReply } = require("../google/publishReply");
const { addHistory } = require("../reviews/history");

async function processAIReply(job) {

  try {

    const review = job.payload.review;

    const location = job.payload.location;

    const aiReply = await generateReply(review);

    if (!aiReply.success) {

      return {
        success: false,
        error: aiReply.error
      };

    }

    const published = await publishReply(

      location,

      review,

      aiReply.reply

    );

    addHistory({

      type: "AI_REPLY",

      customer: review.reviewer?.displayName || "Unknown",

      success: published.success

    });

    return published;

  } catch (err) {

    return {

      success: false,

      error: err.message

    };

  }

}

module.exports = {
  processAIReply
};

