Meteor.publish('banks',function(){
    return Banks.find({});
});

ReactiveTable.publish("bankList",
    function () {
            return Banks;
    }
);