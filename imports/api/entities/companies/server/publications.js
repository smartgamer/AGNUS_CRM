Meteor.publish('companies',function(){
    return Companies.find({});
});

Meteor.publish('schools',function(){
    return Companies.find({ });
});

ReactiveTable.publish("companiesListTable",
    function () {
        return Companies;
    }
);