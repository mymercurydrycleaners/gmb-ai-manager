async function getAnalytics() {

  return {
    success: true,

    overview: {
      averageRating: 0,
      totalReviews: 0,
      totalReplies: 0,
      pendingReplies: 0,
      aiReplies: 0
    },

    ratings: {
      fiveStar: 0,
      fourStar: 0,
      threeStar: 0,
      twoStar: 0,
      oneStar: 0
    },

    performance: {
      responseRate: "0%",
      weeklyGrowth: "0%",
      monthlyGrowth: "0%"
    },

    sentiment: {
      positive: 0,
      neutral: 0,
      negative: 0
    }
  };

}

module.exports = {
  getAnalytics
};
