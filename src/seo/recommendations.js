function getRecommendations(score) {

  const recommendations = [];

  if (score < 100) {
    recommendations.push("Publish at least 3 Google Posts every week.");
  }

  if (score < 90) {
    recommendations.push("Upload more high-quality business photos.");
  }

  if (score < 80) {
    recommendations.push("Reply to every customer review.");
  }

  if (score < 70) {
    recommendations.push("Add more business services.");
  }

  if (score < 60) {
    recommendations.push("Improve your business description using SEO keywords.");
  }

  if (score < 50) {
    recommendations.push("Add FAQs to improve Google Business visibility.");
  }

  return recommendations;

}

module.exports = {
  getRecommendations
};
