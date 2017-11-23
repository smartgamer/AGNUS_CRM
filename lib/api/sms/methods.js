

if (Meteor.isServer) {
    //SDK Version: 2.x 3.x
    // Twilio Credentials 

    var accountSid = 'ACa66384f7da38712d0050406a39079a42'; 
    var authToken = 'de81ceb14031234bba5b225c405ea452'; 
 
    //require the Twilio module and create a REST client 
    var twilio = require('twilio')(accountSid, authToken); 

    twilio.messages.create({ 
            to: '+258840496254',
            from: '+17342125147',
            body: "Ola from Agnus CRM!!!", 
        }, function(err, message) { 
            console.log(message); 
            console.log(err); 
    });
}



