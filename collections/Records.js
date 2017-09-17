import { Session } from 'meteor/session';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Records = new Mongo.Collection('records');

Records.allow({
 insert: function(userId, doc){
  return !!userId;
 },
 update: function(userId, doc){
  return !!userId;
 }
});

RecordSchema = new SimpleSchema({
 
    desc: {
        type: String,
        label: "Description"
    },
    summary:{
        type: String,
        label:"Summary"
    },
    account:{
        type: String,
        label: "Account",
        autoValue: function(){

            if (Meteor.isClient) {
                currentAuthor = Session.get('currentAccount')
                //console.log(currentAuthor);  //return the correct value
                return currentAuthor;    
            };
        },
        autoform: {
            type: "hidden"
        }
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


Records.attachSchema(RecordSchema);