import { check } from 'meteor/check';


Meteor.methods({
    'sendSMS': function (opts) {
      try {
        // var result = twilioClient.sendMessage({
        //   to: opts.to,
        //   body: opts.message
        // });

        var accountSid = Meteor.settings.private.twillo.accountSid; 
        var authToken =  Meteor.settings.private.twillo.authToken; 
        var from =Meteor.settings.private.twillo.from; 
        
        check([accountSid,authToken,from], [String]);

        //require the Twilio module and create a REST client 
        //var twilio = require('twilio')(accountSid, authToken); 
        
        var twilio = require('twilio');
        
        var clienttwilio = new twilio(accountSid, authToken);

        clienttwilio.messages.create({
          to: opts.to,
          from: from,
          body: opts.body
      })
      .then((message) => console.log(message.sid));

      } catch (err) {
        throw new Meteor.error(err);      
      }
      return result;
    }
});






