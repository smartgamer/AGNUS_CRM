import { SSR } from 'meteor/meteorhacks:ssr';

Template.NewAppoiment.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('Appoiments');
    });
});

Template.NewAppoiment.events({
    'click .fa-close': function(){
        Session.set('NewAppoiment',false);
    },
    'change .type':function(e,t){

        var type= t.find('.type').value;

        switch(type){
            case 'Email': 
                t.find('#insertRecordForm').fields="desc,summary,type,date,status,task"
                console.log("Necessario limpar os dados dos Tasks")
                break; 
            case 'Task':
                t.find('#insertRecordForm').fields="desc,summary,type,date,status,email"
                console.log("Necessario limpar os dados dos Emails")
                break;   
        }

    }
})

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