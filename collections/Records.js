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
        label: "Description",
        max: 2000,
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 6,
            class: "foo"
          }
        }
    },
    summary:{
        type: String,
        label:"Summary",
        max: 900,
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 2,
            class: "foo"
          }
        }
    },
    account:{
        type: String,
        label: "Account",
        autoValue: function(){

            if (Meteor.isClient) {
                currentAuthor = Session.get('currentAccount')
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
    },
    openAt:{
        type: Date,
        label: "Open Date",
        autoform: {
            type:"hidden"
            //  type: "bootstrap-datepicker",
            //  datePickerOptions: {
            //    autoclose: true
            //  }
        }
        //,
        //autoValue: function(){
        //    return new Date()
        //}
    }
  
});

Meteor.methods({
    deleteRecord: function(id){
        Records.remove(id);
    }
});


Records.attachSchema(RecordSchema);