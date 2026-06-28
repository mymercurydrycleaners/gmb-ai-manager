const { calculateSEO } = require("../seo/scoring");
const { getRecommendations } = require("../seo/recommendations");

async function getSeoDashboard() {

  const business = {};

  const score = calculateSEO(business);

  return {
    success: true,
    seoScore: score,
    recommendations: getRecommendations(score)
  };

}

module.exports = {
  getSeoDashboard
};
