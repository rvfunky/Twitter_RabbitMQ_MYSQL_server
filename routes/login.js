var user = require('../dbServices/userDAO');


exports.authenticateUser = function(msg,callback){

    user.authenticateUser(msg.email,msg.password,function(response){
        callback(null,response);
    });
};