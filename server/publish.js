import { Session } from 'meteor/session';

Meteor.publish('recipes',function(){
    return Recipes.find({author:this.userId});
});

Meteor.publish('products',function(){
    return Products.find({});
});

Meteor.publish('accounts',function(){
    return Accounts.find({});
});

Meteor.publish('records',function(){
    return Records.find({});
});

Meteor.publish('appoiments',function(){
    return Appoiments.find({});
});

ReactiveTable.publish("productsList",
    function () {
            return Products;
    }
);

ReactiveTable.publish("accountsList",
    function () {
            return Accounts;
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