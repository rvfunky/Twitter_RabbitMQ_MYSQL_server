var user = require('../dbServices/userDAO');


exports.getProfile = function(msg,callback){

    user.getProfile(msg.email,function(response){
        callback(null,response);
    });

};

exports.updateProfile = function(msg,callback){

    user.updateProfile(msg.email,msg.fullname,msg.twitterHandle,msg.gender,msg.birthday,msg.mobile,function(response){
        callback(null,response);
    });

};

