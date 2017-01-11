
var follow = require('../dbServices/followDAO');


exports.getFollowingUsers = function(msg,callback){

    follow.getFollowingUsers(msg.email,function(response){
        callback(null,response);
    });
};

exports.getFollowersUsers = function(msg,callback){

    follow.getFollowersUsers(msg.email,function (response) {
        callback(null,response);
    })
}