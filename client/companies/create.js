Template.NewCompany.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('companies');
    });
});

Template.NewCompany.events({
    'click .company-close': function(){
        Session.set('NewCompany',false);
    }
})

