import { Session } from 'meteor/session';

Meteor.publish('userList', function (){ 
    return Meteor.users.find({});
  });

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

Meteor.publish('Meteor.users.initials', function ({ userIds }) {
    // Validate the arguments to be what we expect
    new SimpleSchema({
      userIds: { type: [String] }
    }).validate({ userIds });
    // Select only the users that match the array of IDs passed in
    const selector = {
      _id: { $in: userIds }
    };
    // Only return one field, `initials`
    const options = {
      fields: { initials: 1 }
    };
    return Meteor.users.find(selector, options);
  });