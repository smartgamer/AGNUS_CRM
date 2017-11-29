Meteor.publish('qoutas',function(){
    return Qoutas.find({});
});

ReactiveTable.publish("qoutasListTable",
    function () {
            return Qoutas;
    }
);