 id="8imq6z"
const { getReviews } = require("../google/reviews");
const { isProcessed, markProcessed } = require("./cache");
const { addHistory } = require("./history");
const { addJob } = require("../queue/queue");

async function syncReviews() {

  const data = await getReviews();

  if (!data.success) {
    return data;
  }

  let newReviews = 0;

  for (const review of (data.reviews || [])) {

    const reviewId =
      review.reviewId ||
      review.name ||
      `${review.reviewer?.displayName}-${review.createTime}`;

    if (isProcessed(reviewId)) {
      continue;
    }

    markProcessed(reviewId);

    addHistory({
      type: "NEW_REVIEW",
      reviewId,
      customer: review.reviewer?.displayName || "Unknown"
    });

    addJob("AI_REPLY", {
      review,
      location: data.location
    });

    newReviews++;

  }

  return {
    success: true,
    synced: newReviews,
    total: (data.reviews || []).length
  };

}

module.exports = {
  syncReviews
};

