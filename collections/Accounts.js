
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Accounts = new Mongo.Collection('accounts');

Accounts.allow({
 insert: function(userId, doc){
  return !!userId;
 },
 update: function(userId, doc){
  return !!userId;
 }
});

AccountSchema = new SimpleSchema({
 code:{
    type:Number,
    label:"Code"
 },
 name: {
  type: String,
  label: "Name",
    max: 20
 },
desc: {
  type: String,
  label: "Description"
 },
 email:{
    type: String,
    label:"Email"
 },
contact:{
    type:String,
    label:"Contact Principal",
        max: 20
},
telphone:{
    type:String,
    label:"Telphone Principal",
        max: 20
},
fax:{
    type:String,
    label:"Fax",
        max: 20
},
otherContact:{
    type:String,
    label:"Other Contact",
        max: 20
},

 author: {
  type: String,
  label: "Author",
  autoValue: function(){
   return this.userId
  },
  autoform: {
    type: "hidden"
  }
 },
 createdAt: {
  type: Date,
  label: "Created At",
  autoValue: function(){
   return new Date()
  },
  autoform: {
    type: "hidden"
  }
 }
  
});


Accounts.attachSchema(AccountSchema);