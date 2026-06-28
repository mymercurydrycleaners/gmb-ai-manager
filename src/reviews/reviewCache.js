const cache = new Set();

function isDuplicate(reviewId) {
  return cache.has(reviewId);
}

function saveReview(reviewId) {
  cache.add(reviewId);
}

module.exports = {
  isDuplicate,
  saveReview
};
