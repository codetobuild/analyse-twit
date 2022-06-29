export const calculateTweetsMetric = (dataArray) => {
  let totalProfileCicks = 0;
  let totalRetweets = 0;
  let totalLikes = 0;
  let totalImpressions = 0;

  dataArray.forEach((item) => {
    totalProfileCicks += item.userProfileClicks;
    totalRetweets += item.retweetCount;
    totalLikes += item.likeCount;
    totalImpressions += item.impressionCount;
  });
  return {
    totalImpressions,
    totalLikes,
    totalProfileCicks,
    totalRetweets,
  };
};
