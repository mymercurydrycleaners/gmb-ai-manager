const { generateSmartReply } = require("../ai/smartReply");

async function autoReply(review) {
  try {
    if (!review) {
      throw new Error("Review is required.");
    }

    const reply = generateSmartReply(
      review.comment || "",
      review.starRating || review.rating || 5
    );

    return {
      success: true,
      reviewId: review.reviewId || null,
      rating: review.starRating || review.rating || 5,
      reply
    };

  } catch (err) {

    return {
      success: false,
      error: err.message
    };

  }
}

module.exports = {
  autoReply
};

