
Meteor.methods({
    'sendSMS': function (opts) {
      try {
        // var result = twilioClient.sendMessage({
        //   to: opts.to,
        //   body: opts.message
        // });

        var accountSid = Meteor.settings.twillo.accountSid; 
        var authToken = Meteor.settings.twillo.authToken; 
     
        //require the Twilio module and create a REST client 
        var twilio = require('twilio')(accountSid, authToken); 
    
        twilio.messages.create({ 
                to: opts.to,
                from: opts.from,
                body: opts.body, 
            }, function(err, message) { 
                console.log(message); 
                console.log(err); 
        });

      } catch (err) {
        throw new Meteor.error(err);      
      }
      return result;
    }
});






