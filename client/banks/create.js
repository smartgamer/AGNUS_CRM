Template.NewBank.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('banks');
    });
});

Template.NewBank.events({
    'click .bank-close': function(){
        Session.set('NewBank',false);
    }
})

