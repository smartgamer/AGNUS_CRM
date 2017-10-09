import { SSR } from 'meteor/meteorhacks:ssr';

Template.NewAppoiment.hooks({
    created() {
        console.log("foo created");
    },
    rendered() {
        console.log("foo rendered");
    },
    destroyed() {
      console.log("foo destroyed");
    },
});

Template.NewAppoiment.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('Appoiments');
    });
});

Template.NewAppoiment.events({
    'click .fa-close': function(){
        Session.set('NewAppoiment',false);
    }
});

AutoForm.hooks({
    
    insertAppoimentForm: {
    
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            if (customHandler(insertDoc)) {
                this.done();
            } else {
                this.done(new Error("Submission failed"));
            }
            return false;
        },
        after:{
            insert: function(error, result){
                var emailData = {
                    name: "Doug Funnie",
                    favoriteRestaurant: "Honker Burger",
                    bestFriend: "Skeeter Valentine",
                };
                var html=Blaze.toHTMLWithData(Template.MailTemplate,emailData);  
        
                // Client: Asynchronously send an email.
                Meteor.call(
                    'sendEmail',
                    'Alice <guimaraesmahota@gmail.com>',
                    'guimaraesmahota@gmail.com',
                    'Hello from Meteor!',
                    'This is a test of Email.send.',
                    html
                );
            }
        },
        onSuccess: function(operation, result, template) {
            
            FlashMessages.sendSuccess('Success!');
            //currentAuthor = Session.get('currentAccount');
            //FlowRouter.go('/Account_Records/' + currentAuthor);
            
        },
        onError: function (name, error, template) {
            FlashMessages.sendError(name + " error: " + error );
        }
    }
});