//super simple rpc server example

var amqp = require('amqp')
    , util = require('util');

var routefile = require('./services/routes');
var cnn = amqp.createConnection({host:'127.0.0.1'});

cnn.on('ready', function(){
    console.log("listening on profile_queue");

    cnn.queue('profile_queue', function(q){
        q.subscribe(function(message, headers, deliveryInfo, m){
            util.log(util.format( deliveryInfo.routingKey, message));
            util.log("Message: "+JSON.stringify(message));
            util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
            routefile.profile_handle_request(message, function(err,res){

                console.log("response values"  + res);
                //return index sent
                cnn.publish(m.replyTo, res, {
                    contentType:'application/json',
                    contentEncoding:'utf-8',
                    correlationId:m.correlationId
                });
            });
        });
    });
});

cnn.on('ready', function(){
    console.log("listening on tweets_queue");

    cnn.queue('tweets_queue', function(q){
        q.subscribe(function(message, headers, deliveryInfo, m){
            util.log(util.format( deliveryInfo.routingKey, message));
            util.log("Message: "+JSON.stringify(message));
            util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
            routefile.tweets_handle_request(message, function(err,res){

                console.log("response values"  + res);
                //return index sent
                cnn.publish(m.replyTo, res, {
                    contentType:'application/json',
                    contentEncoding:'utf-8',
                    correlationId:m.correlationId
                });
            });
        });
    });
});

cnn.on('ready', function(){
    console.log("listening on search_queue");

    cnn.queue('search_queue', function(q){
        q.subscribe(function(message, headers, deliveryInfo, m){
            util.log(util.format( deliveryInfo.routingKey, message));
            util.log("Message: "+JSON.stringify(message));
            util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
            routefile.search_handle_request(message, function(err,res){

                console.log("response values"  + res);
                //return index sent
                cnn.publish(m.replyTo, res, {
                    contentType:'application/json',
                    contentEncoding:'utf-8',
                    correlationId:m.correlationId
                });
            });
        });
    });
});

cnn.on('ready', function(){
    console.log("listening on signup_queue");

    cnn.queue('signup_queue', function(q){
        q.subscribe(function(message, headers, deliveryInfo, m){
            util.log(util.format( deliveryInfo.routingKey, message));
            util.log("Message: "+JSON.stringify(message));
            util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
            routefile.signUp_handle_request(message, function(err,res){

                console.log("response values"  + JSON.stringify(res));
                //return index sent
                cnn.publish(m.replyTo, res, {
                    contentType:'application/json',
                    contentEncoding:'utf-8',
                    correlationId:m.correlationId
                });
            });
        });
    });
});

cnn.on('ready', function(){
    console.log("listening on follow_queue");

    cnn.queue('follow_queue', function(q){
        console.log("follow queue  called");
        q.subscribe(function(message, headers, deliveryInfo, m){
            util.log(util.format( deliveryInfo.routingKey, message));
            util.log("Message: "+JSON.stringify(message));
            util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
            routefile.follow_handle_request(message, function(err,res){

                console.log("response values"  + res);
                //return index sent
                cnn.publish(m.replyTo, res, {
                    contentType:'application/json',
                    contentEncoding:'utf-8',
                    correlationId:m.correlationId
                });
            });
        });
    });
});

cnn.on('ready', function(){
    console.log("listening on login_queue");

    cnn.queue('login_queue', function(q){
        q.subscribe(function(message, headers, deliveryInfo, m){
            util.log(util.format( deliveryInfo.routingKey, message));
            util.log("Message: "+JSON.stringify(message));
            util.log("DeliveryInfo: "+JSON.stringify(deliveryInfo));
            routefile.login_handle_request(message, function(err,res){

                console.log("response values"  + JSON.stringify(res));
                //return index sent
                cnn.publish(m.replyTo, res, {
                    contentType:'application/json',
                    contentEncoding:'utf-8',
                    correlationId:m.correlationId
                });
            });
        });
    });
});





