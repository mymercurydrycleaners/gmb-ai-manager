const cron = require("node-cron");

const { getReviews } = require("../google/reviews");
const { autoReply } = require("./autoReply");
const { isDuplicate, saveReview } = require("./reviewCache");
const { logReply } = require("./logs");

async function processReviews() {

  console.log("Checking Google Reviews...");

  const data = await getReviews();

  if (!data.success)
    return;

  const reviews = data.reviews || [];

  for (const review of reviews) {

    if (isDuplicate(review.reviewId))
      continue;

    const result = await autoReply(
      review,
      data.location
    );

    if (result.success) {

      saveReview(review.reviewId);

      logReply(
        review.reviewId,
        "SUCCESS"
      );

    } else {

      logReply(
        review.reviewId,
        "FAILED"
      );

    }

  }

}

function startReviewScheduler() {

  console.log("✅ Review Scheduler Started");

  cron.schedule("*/10 * * * *", async () => {

    await processReviews();

  });

}

module.exports = {
  startReviewScheduler
};
