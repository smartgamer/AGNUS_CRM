Template.NewFamily.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('familys');
    });
});

Template.NewFamily.events({
    'click .family-close': function(){
        Session.set('NewFamily',false);
    }
})

