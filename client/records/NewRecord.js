Template.NewRecord.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('records');
    });
});

AutoForm.addHooks(['insertRecordForm'], {
    onSuccess: function(operation, result, template) {
      
        FlashMessages.sendSuccess('Success!');
        currentAuthor = Session.get('currentAccount');
        FlowRouter.go('/Account_Records/' + currentAuthor);
        
    },
    onError: function (name, error, template) {
        console.log(name + " error:", error);
      }
  });