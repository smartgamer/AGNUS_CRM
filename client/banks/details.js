Template.BankDetails.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('banks');
    });
});

Template.BankDetails.helpers({ 
    bank: () => {
        var id = FlowRouter.getParam('id');
        return Banks.findOne({_id: id});
    }
}); 

Template.BankDetails.events({ 
    'click #foo': function(event, template) { 
         
    } 
}); 
