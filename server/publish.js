import { Session } from 'meteor/session';

Meteor.publish('recipes',function(){
    return Recipes.find({author:this.userId});
});

Meteor.publish('familys',function(){
    return Familys.find({});
});

Meteor.publish('records',function(){
    return Records.find({});
});

Meteor.publish('appoiments',function(){
    return Appoiments.find({});
});

ReactiveTable.publish("familysList",
    function () {
            return Familys;
    }
);

ReactiveTable.publish("accountsRecordsList",
    function () {
        return Records;    
    }
);

ReactiveTable.publish("appoimentsList",
    function () {
        return Appoiments;    
    }
);

