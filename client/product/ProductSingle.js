Template.ProductSingle.onCreated(function(){
    var self = this;

    self.autorun(function(){
        self.subscribe('products');
        self.subscribe('familys');
    });
});

Template.ProductSingle.helpers({
    product: () => {
        var id = FlowRouter.getParam('id');
        return Products.findOne({_id: id});
    }
});