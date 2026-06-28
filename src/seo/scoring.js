function calculateSEO(data = {}) {

  let score = 100;

  if (!data.description)
    score -= 10;

  if (!data.services || data.services.length < 5)
    score -= 10;

  if (!data.photos || data.photos.length < 10)
    score -= 10;

  if (!data.posts || data.posts.length < 8)
    score -= 10;

  if (!data.faqs || data.faqs.length < 5)
    score -= 10;

  if (!data.reviews || data.reviews.length < 20)
    score -= 10;

  if (score < 0)
    score = 0;

  return score;

}

module.exports = {
  calculateSEO
};
