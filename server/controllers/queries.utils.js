const userLookUpQueries =
  "user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,organic_metrics,possibly_sensitive,promoted_metrics,public_metrics,referenced_tweets,source,text";

const tweetLookupQueries =
  "tweet.fields=non_public_metrics,organic_metrics&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld";

const tweetTimelineQueries =
  "tweet.fields=created_at,public_metrics,organic_metrics&exclude=replies";

  const myProfileQueries =
    "user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,organic_metrics,possibly_sensitive,promoted_metrics,public_metrics,referenced_tweets,reply_settings,source,text";

    
module.exports = {
  userLookUpQueries,
  tweetLookupQueries,
  tweetTimelineQueries,
  myProfileQueries,
};
