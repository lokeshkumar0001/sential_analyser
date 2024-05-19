from googleapiclient.discovery import build
from textblob import TextBlob
import tweepy
import os
import json
import sys

# Fetch API keys from environment variables
API_KEY = os.getenv('YOUTUBE_API_KEY')
CONSUMER_KEY = os.getenv('TWITTER_CONSUMER_KEY')
CONSUMER_SECRET = os.getenv('TWITTER_CONSUMER_SECRET')
ACCESS_TOKEN = os.getenv('TWITTER_ACCESS_TOKEN')
ACCESS_TOKEN_SECRET = os.getenv('TWITTER_ACCESS_TOKEN_SECRET')

# YouTube video ID
VIDEO_ID = sys.argv[1]

# Function to fetch Twitter post comments (replies/mentions)
def get_tweet_comments(tweet_id):
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
    api = tweepy.API(auth)

    comments = []
    # Fetching replies to the tweet
    replies = tweepy.Cursor(api.search, q='to:' + tweet_id, tweet_mode='extended').items()
    for reply in replies:
        if hasattr(reply, 'full_text'):
            comments.append(reply.full_text)
    return comments

# Function to fetch YouTube comments
def get_video_comments(video_id, api_key):
    youtube = build('youtube', 'v3', developerKey=api_key)
    comments = []
    request = youtube.commentThreads().list(
        part="snippet",
        videoId=video_id,
        textFormat="plainText"
    )
    while request:
        response = request.execute()
        for item in response["items"]:
            comment = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
            comments.append(comment)
        request = youtube.commentThreads().list_next(request, response)
    return comments

# Function to classify sentiment of each comment
def classify_sentiment(comments):
    classified_comments = []
    for comment in comments:
        analysis = TextBlob(comment)
        polarity = analysis.sentiment.polarity
        if polarity > 0.5:
            sentiment = "Very Positive"
        elif polarity > 0:
            sentiment = "Positive"
        elif polarity < -0.5:
            sentiment = "Very Negative"
        elif polarity < 0:
            sentiment = "Negative"
        else:
            sentiment = "Neutral"
        classified_comments.append((comment, sentiment))
    return classified_comments

if __name__ == "__main__":
    comments = get_video_comments(VIDEO_ID, API_KEY)

    # comments = get_tweet_comments(tweet_id)
    if comments:
        classified_comments = classify_sentiment(comments)
        # Print as JSON
        print(json.dumps(classified_comments))
    else:
        print(json.dumps([]))
