
var follow= require('../routes/follow');
var login=require('../routes/login');
var signup=require('../routes/signup');
var tweets=require('../routes/tweets');
var search=require('../routes/search');
var profile=require('../routes/profile');

exports.profile_handle_request = function (message,callback) {
    if(message.reqType=="getProfile"){
        profile.getProfile(message,callback);
    }
    if(message.reqType=="updateProfile"){
        profile.updateProfile(message,callback);
    }
}

exports.login_handle_request = function(message, callback) {
    console.log("In handle_request"+ message.reqType);

        login.authenticateUser(message, callback);

};

exports.signUp_handle_request = function(message, callback) {
    console.log("In handle_request "+ message.reqType);

        signup.createUser(message, callback);

};

exports.search_handle_request =function (message,callback) {
  console.log("In handle request"+message.reqType);
    if(message.reqType=="searchUser") {
        search.searchUser(message,callback);
    }
    if(message.reqType=="followUser"){
        search.followUser(message,callback);
    }
    if(message.reqType=="searchHashTags"){
        search.searchHashTags(message,callback);
    }
};

exports.customers_handle_request=function(message,callback){
    console.log("in customers_handle_request"+message.reqType);
    if(message.reqType === "postReview"){
        customer.postReview(message,callback);
    }
    if(message.reqType === "deleteCustomer"){
        customer.deleteCustomer(message,callback);
    }
};

exports.follow_handle_request=function(message,callback){
  console.log("in follow handle request"+message.reqType);
  if(message.reqType=="getFollowingUsers"){
      follow.getFollowingUsers(message,callback);
  }
  if(message.reqType=="getFollowersUsers"){
      follow.getFollowersUsers(message,callback);
  }
};

exports.tweets_handle_request=function (message,callback) {
    console.log("in tweets handle request"+message.reqType);
    if(message.reqType=="insertTweet"){
        tweets.insertTweet(message,callback);
    }
    if(message.reqType=="insertRetweet"){
        tweets.insertRetweet(message,callback);
    }
    if(message.reqType=="getTweets"){
        tweets.getTweets(message,callback);
    }
    if(message.reqType=="getStats"){
        tweets.getStats(message,callback);
    }
}



