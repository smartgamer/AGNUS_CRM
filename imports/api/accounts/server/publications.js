Meteor.publish('accounts',function(){
    return Accounts.find({});
});

ReactiveTable.publish("accountsList",
    function () {
            return Accounts;
    }
);