Template.NewProduct.onCreated(function(){
    var self = this;
    
    self.autorun(function(){
        self.subscribe('products');
        self.subscribe('familys');
        self.subscribe('files.images.all');
    });
    
    
});

Template.NewProduct.events({
    'click .product-close': function(){
        Session.set('NewProduct',false);
    }
})

