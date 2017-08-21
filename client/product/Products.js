Template.Products.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('products');
    });
});

Template.Products.helpers({
    products: () => {
        return Products.find({});
    }
});

Template.Products.events({
    'click .newProduct':function(){
        FlowRouter.go('product_New');
    }
});

