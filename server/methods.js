import { check } from 'meteor/check';
import { Email } from 'meteor/email';
import { SSR, Template } from 'meteor/meteorhacks:ssr';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

// Server: Define a method that the client can call.
Meteor.methods({
    sendEmail(to, from, subject, text,emailData) {
        
        

        //SSR.compileTemplate('htmlEmail', Assets.getText('templates/html-email.html'));
        //console.log(SSR);
        
        
      // Make sure that all arguments are strings.
      check([to, from, subject, text], [String]);
      // Let other method calls from the same client start running, without
      // waiting for the email sending to complete.
      this.unblock();

      Email.send({ 
          'to':to, 
          'from':from, 
          'subject':subject, 
          'text':text,
          'html': emailData,
            attachments: [{
            //filename: 'flapjacks.pdf',
            //filepath: 'https://s3.amazonaws.com/tmc-post-content/flapjacks.pdf',
            //contentType: 'pdf',
            }],
        });
      
     
    },
    "userExists": function(username){
        return !!Meteor.users.findOne({username: username});
    },
  });

