export const getReviewStats = (reviews) => {
  if (!reviews?.length) {
    return {
      average: 0,
      max: 0,
    };
  }

  let sum = 0;
  let max = 0;

  reviews.forEach((review) => {
    const score = review.analysis.score;

    sum += score;
    max = Math.max(max, score);
  });

  return {
    average: (sum / reviews.length).toFixed(2),
    max,
  };
};