

if (Meteor.isServer) {
    //SDK Version: 2.x 3.x
    // Twilio Credentials 
    try {
        var accountSid = Meteor.settings.twillo.accountSid; 
        var authToken = Meteor.settings.twillo.authToken; 
     
        //require the Twilio module and create a REST client 
        var twilio = require('twilio')(accountSid, authToken); 
    
        twilio.messages.create({ 
                to: '+258849535156',
                from: '+17342125147',
                body: "Ola from Agnus CRM!!!", 
            }, function(err, message) { 
                console.log(message); 
                console.log(err); 
        });
    } catch (error) {
        console.log(error);
    }
    
}



