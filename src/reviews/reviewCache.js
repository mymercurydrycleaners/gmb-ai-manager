t id="b0r4xt"
const processedReviews = new Map();

function isProcessed(reviewId) {
  return processedReviews.has(reviewId);
}

function markProcessed(reviewId) {
  processedReviews.set(reviewId, {
    processedAt: new Date().toISOString()
  });
}

function getProcessedReviews() {
  return Array.from(processedReviews.entries()).map(([id, data]) => ({
    id,
    ...data
  }));
}

module.exports = {
  isProcessed,
  markProcessed,
  getProcessedReviews
};

