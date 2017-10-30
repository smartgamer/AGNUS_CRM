Template.NewCustomer.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('customers');
    });
});

Template.NewCustomer.events({
    'click .fa-close': function(){
        Session.set('NewCustomer',false);
    }
});