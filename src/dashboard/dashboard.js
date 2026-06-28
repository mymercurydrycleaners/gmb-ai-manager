async function getDashboard() {

  return {
    success: true,

    business: "My Mercury Dry Cleaners",

    overview: {
      averageRating: 0,
      totalReviews: 0,
      totalReplies: 0,
      pendingReplies: 0,
      aiReplies: 0
    },

    analytics: {
      weeklyGrowth: "0%",
      monthlyGrowth: "0%",
      positiveReviews: 0,
      negativeReviews: 0
    },

    lastUpdated: new Date()
  };

}

module.exports = {
  getDashboard
};
