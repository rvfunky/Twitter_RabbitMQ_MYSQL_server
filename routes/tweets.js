var tweets = require('../dbServices/tweetsDAO');
var user = require('../dbServices/userDAO');

exports.insertTweet = function(msg,callback){

    tweets.insertTweet(msg.tweetData,msg.email,function(response){
        callback(null,response);
    });
};

exports.insertRetweet=function(msg,callback){

    tweets.insertRetweet(msg.tweetData,msg.email,msg.origTweeter,function (response) {
        callback(null,response);
    })
};

exports.getTweets=function (msg,callback) {

    tweets.getTweets(msg.email,function (response) {
        callback(null,response);
    })
}

exports.getStats=function (msg,callback) {

    user.getStats(msg.email,function (response) {
        callback(null,response);
    })
}