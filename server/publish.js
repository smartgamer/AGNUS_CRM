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

