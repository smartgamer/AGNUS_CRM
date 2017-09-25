import { SSR } from 'meteor/meteorhacks:ssr';

Template.NewRecord.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('records');
        self.subscribe('userList');
    });
});

Template.NewRecord.events({
    'click .fa-close': function(){
        Session.set('newRecord',false);
    }
});

Template.NewRecord.helpers({
    usersOptions: function () {
        return Meteor.users.find({}, {
            sort: {
                username: 1
            }
          }).map(function (c)  {
            return {label: c.username , value: c._id};
        });
    }
  });

AutoForm.addHooks(['insertRecordForm'], {
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
        console.log(name + " error:", error);
        FlashMessages.sendError(name + " error:", error);
    }
  });