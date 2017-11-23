Template.NewAccount.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('accounts');
        self.subscribe('banks');
    });
});

Template.NewAccount.events({
    'click .fa-close': function(){
        Session.set('NewAccount',false);
    }
});