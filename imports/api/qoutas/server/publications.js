Meteor.publish('qoutas',function(){
    return Qoutas.find({});
});

ReactiveTable.publish("qoutasListTable",
    function () {
            return Qoutas;
    }
);

Meteor.publish('qoutasMember',function(){
    return QoutasMember.find({});
});

ReactiveTable.publish("qoutasMemberListTable",
    function () {
            return QoutasMember;
    }
);
