Meteor.publish('qoutas',function(){
    return Qoutas.find({});
});

ReactiveTable.publish("qoutasList",
    function () {
            return Qoutas;
    }
);