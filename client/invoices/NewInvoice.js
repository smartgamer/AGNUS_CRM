Template.NewInvoice.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('invoices');
        self.subscribe('qoutas');
        self.subscribe('accounts');
        self.subscribe('products');
    });
});

Template.NewInvoice.events({
    'click .invoice-close': function(){
        Session.set('NewInvoice',false);
    }
})

