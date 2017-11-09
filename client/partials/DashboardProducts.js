Template.Dashboard.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('products');
        self.subscribe('familys');
    });
});

Template.Dashboard.helpers({
    
    products: () => {
        return Products.find({});
    }
});