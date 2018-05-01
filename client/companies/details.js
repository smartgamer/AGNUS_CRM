Template.CompanyDetails.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('companies');
    });
});

Template.CompanyDetails.helpers({ 
    company: () => {
        var id = FlowRouter.getParam('id');
        return Companies.findOne({_id: id});
    }
}); 

Template.CompanyDetails.events({ 
    'click #foo': function(event, template) { 
         
    } 
}); 
