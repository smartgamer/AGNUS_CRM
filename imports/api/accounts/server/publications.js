Meteor.publish('accounts',function(){
    return Accounts.find({});
});

ReactiveTable.publish("accountsList",
    function () {
            return Accounts;
    }
);

//USERS
Meteor.publish('allUsers', function(){
	return Meteor.users.find({sort: { 'profile.firstname': 1 }});
});
Meteor.publish('teachers', function(){
	return Meteor.users.find({'roles.__global_roles__':'teacher'});
});
Meteor.publish(null, function (){
  return Meteor.roles.find()
});
Meteor.publish('singleUser', function(id){
  check(id, String);
  return Meteor.users.find({_id: id});
});
Meteor.publish('userImage', function(){
  return UserImage.find();
});