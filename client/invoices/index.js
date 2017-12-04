Template.invoices.onCreated(function () {
    var self = this;

    self.autorun(function () {
        self.subscribe('invoices');
    });
});

Template.invoices.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.invoices.events({ 
    'click #foo': function(event, template) { 
         
    } 
}); 
