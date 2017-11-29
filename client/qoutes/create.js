Template.NewQoute.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('qoute');
    });
});

Template.NewQoute.events({
    'click .qoute-close': function(){
        Session.set('NewQoute',false);
    }
})

