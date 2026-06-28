function getBusinessSuggestions(data = {}) {

  const suggestions = [];

  if ((data.averageRating || 0) < 4.8)
    suggestions.push("Improve review response quality.");

  if ((data.totalReviews || 0) < 100)
    suggestions.push("Ask more customers for reviews.");

  if ((data.responseRate || "0%") !== "100%")
    suggestions.push("Reply to all customer reviews.");

  suggestions.push("Publish at least 3 Google Posts every week.");

  suggestions.push("Upload 5 new business photos every month.");

  return suggestions;

}

module.exports = {
  getBusinessSuggestions
};

