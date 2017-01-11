var user = require('../dbServices/userDAO');


exports.createUser = function(msg,callback){

    user.createUser(msg.email,msg.password,msg.fullname,function(response){
        callback(null,response);
    });
};