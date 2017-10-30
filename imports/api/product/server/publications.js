Meteor.publish('products',function(){
    return Products.find({});
});

ReactiveTable.publish("productsList",
    function () {
            return Products;
    }
);