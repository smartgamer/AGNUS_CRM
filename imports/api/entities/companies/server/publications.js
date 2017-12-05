Meteor.publish('companies',function(){
    return Companies.find({});
});

ReactiveTable.publish("companiesListTable",
    function () {
        return Companies;
    }
);