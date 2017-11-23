import { Session } from 'meteor/session';
import SimpleSchema from 'simpl-schema';
import { Stream } from 'stream';

SimpleSchema.extendOptions(['autoform']);

Appoiments = new Mongo.Collection('appoiments');

Schema = {};

Schema.Email = new SimpleSchema({
    
    from:{
        type: String,
        label: "From"
    },
    to:{
        type: String,
        label: "To"
    },
    cc:{
        type: String,
        label: "CC",
        optional:true
    },
    bcc:{
        type: String,
        label: "BCC",
        optional:true
    },
    message:{
        type: String,
        label: "Message"
    },
    template:{
        type: String,
        label: "Template",
        optional:true
    }

});

Schema.Task = new SimpleSchema({
    
    begin:{
        type: Date,
        label: "Begin",
        autoform: {
          afFieldInput: {
            type: "text",
            rows: 6,
            class: "datetimepicker"
          }
        }
        
    },
    end:{
        type: Date,
        label: "End",
        autoform: {
          afFieldInput: {
            type: "text",
            rows: 6,
            class: "datetimepicker"
          }
        }
    },
    time:{
        type: Number,
        label: "Total Time",
        optional:true
    },
    Discount:{
        type: Number,
        label: "Discount Time",
        optional:true
    }

});

Schema.Call = new SimpleSchema({

});

Schema.Sms = new SimpleSchema({
    from: {
        type: String,
        label:"From",
        max:10
    },
    to: {
        type:String,
        label:"To",
        max:10
    },
    message:{
        type: String,
        label:"Message",
        optional:false
    },
    template:{
        type:String,
        label:"Template",
        optional:true
    }
});


AppoimentSchema = new SimpleSchema({
 
    desc: {
        type: String,
        label: "Description",
        max: 1000,
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 4,
            class: "materialize-textarea"
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
            rows: 4,
            class: "materialize-textarea"
          }
        }
    },
    type:{
        type: String,
        label:"Type",
        allowedValues: ['Email','Task','Meeting','Call'],
        optional: false,
        autoform: {
            afFieldInput: {
                class: 'type'
            },
            options: [
              {label: "Send Email", value: 'Email'},
              {label: "Create Task", value: 'Task'},
              {label: "Create Meeting", value: 'Meeting'},
              {label: "Make Call", value: 'Call'} 
            ]
          }
    },
    account_id:{
        type: String,
        label: "Account",
        optional:true,
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
    record_id:{
        type: String,
        label: "Record Id",
        optional:true,
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
    date:{
        type: Date,
        label: "Date",
        autoform: {
            //type:"hidden"
            //  type: "bootstrap-datepicker",
        //  datePickerOptions: {
        //    autoclose: true
        //  }
        }
    },
    status: {
        type:String,
        allowedValues: ['Open','Close','Done'],
        autoform: {
            
            options: [
              {label: "Open", value: 'Open'},
              {label: "Close", value: 'Close'}, 
              {label: "Done", value: 'Done'}
            ]
          }
    },
    email: {
        type: Schema.Email,
        optional:true,
    },
    task:{
        type: Schema.Task,
        optional:true
    }
    
  
}, { tracker: Tracker });

Meteor.methods({
    deleteAppoiment: function(id){
        Appoiments.remove(id);
    }
});

Appoiments.allow({
    insert: function(userId, doc){
     return !!userId;
    },
    update: function(userId, doc){
     return !!userId;
    }
});
   
Appoiments.attachSchema(AppoimentSchema);