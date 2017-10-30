Meteor.publish('customers',function(){
    return Customers.find({});
});

ReactiveTable.publish("customersList",
    function () {
            return Customers;
    }
);