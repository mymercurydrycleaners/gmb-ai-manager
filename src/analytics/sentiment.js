function analyzeSentiment(reviews = []) {

  let positive = 0;
  let neutral = 0;
  let negative = 0;

  reviews.forEach((review) => {

    const rating = Number(review.starRating || 5);

    if (rating >= 4)
      positive++;

    else if (rating === 3)
      neutral++;

    else
      negative++;

  });

  return {

    success: true,

    positive,

    neutral,

    negative

  };

}

module.exports = {
  analyzeSentiment
};

