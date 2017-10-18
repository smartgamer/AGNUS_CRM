Template.NewProduct.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('products');
    });
});

Template.NewProduct.events({
    'click .product-close': function(){
        Session.set('NewProduct',false);
    }
})

