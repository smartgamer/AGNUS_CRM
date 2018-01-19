Template.NewCompany.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('companies');
        self.subscribe('banks');
    });
});

Template.NewCompany.events({
    'click .company-close': function(){
        Session.set('NewCompany',false);
    }
});

