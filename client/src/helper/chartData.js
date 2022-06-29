export const weekDay = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

export const initialKeyValues = {
  impressionCount: 0,
  retweetCount: 0,
  userProfileClicks: 0,
  replyCount: 0,
  likeCount: 0,
};

export const generateTweetTimelineChartData = (dataPayload) => {
  const tweetData = {
    sunday: { ...initialKeyValues, name: "sunday" },
    monday: { ...initialKeyValues, name: "monday" },
    tuesday: { ...initialKeyValues, name: "tuesday" },
    wednesday: { ...initialKeyValues, name: "wednesday" },
    thursday: { ...initialKeyValues, name: "thursday" },
    friday: { ...initialKeyValues, name: "friday" },
    saturday: { ...initialKeyValues, name: "saturday" },
  };

  Object.values(dataPayload).forEach((value) => {
    let d = new Date(value.created_at);
    let day = weekDay[d.getDay()];
    tweetData[day] = {
      impressionCount:
        tweetData[day].impressionCount + value.organic_metrics.impression_count,
      retweetCount:
        tweetData[day].retweetCount + value.organic_metrics.retweet_count,
      userProfileClicks:
        tweetData[day].userProfileClicks +
        value.organic_metrics.user_profile_clicks,
      replyCount: tweetData[day].replyCount + value.organic_metrics.reply_count,
      likeCount: tweetData[day].likeCount + value.organic_metrics.like_count,
    };
  });
  const tweetTimeLineChartData = [];

  for (let i = 6; i >= 0; --i) {
    let d = new Date();
    let dayNum = (d.getDay() - i + 7) % 7;
    const day = weekDay[dayNum];
    //   console.log(weekDay[day]);
    tweetTimeLineChartData.push(tweetData[day]);
    // calculate totals
  }

  return tweetTimeLineChartData;
};

// console.log(obj);
// console.log(tweetTimeLineChartData)
// export const tweetTimeLineChartDataArray = tweetTimeLineChartData;
// const data = {
//   data: [
//     {
//       organic_metrics: {
//         impression_count: 4,
//         retweet_count: 0,
//         user_profile_clicks: 1,
//         reply_count: 0,
//         like_count: 0,
//       },
//       created_at: "2022-06-28T12:18:41.000Z",
//       text: "5th tweets",
//       id: "1541757979279917056",
//       public_metrics: {
//         retweet_count: 0,
//         reply_count: 0,
//         like_count: 0,
//         quote_count: 0,
//       },
//     },
//   ],
//   meta: {
//     result_count: 5,
//     newest_id: "1541757979279917056",
//     oldest_id: "1541318244564627456",
//   },
// };
