Meteor.publish('invoices',function(){
    return Invoices.find({});
});

ReactiveTable.publish("invoicesListTable",
    function () {
        return Invoices;
    }
);