var user = require('../dbServices/userDAO');
var follow=require('../dbServices/followDAO');
var tweets=require('../dbServices/tweetsDAO');

exports.searchUser = function(msg,callback){

    user.searchUser(msg.searchEmail,function(response){
        callback(null,response);
    });

};

exports.followUser=function (msg,callback) {
    follow.followUser(msg.followingEmail,msg.followerEmail,function (response) {
        callback(null,response);
    })
};

exports.searchHashTags=function (msg,callback) {
    tweets.searchHashTags(msg.tag,function (response) {
        callback(null,response);
    })
}