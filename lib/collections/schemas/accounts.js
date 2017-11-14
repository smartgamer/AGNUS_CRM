import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Schema.AccountRelationship = new SimpleSchema({
    type: {
        type:String,
        allowedValues: ['Father','Mother','Other','Child'],
        autoform: {
            
            options: [
              {label: "Father", value: 'Father'},
              {label: "Mother", value: 'Mother'}, 
              {label: "Other", value: 'Other'},
              {label: "Child",value:"Child"}
            ]
        }
    },
    other:{
        type: String,
        optional:true,
        max:"10"
    },
    account_id: {
        type: String,
        autoform: {
            type: "select",
            options: function () {
                return Accounts.find({}, {
                    sort: {
                        name: 1
                    }
                  }).map(function (c)  {
                    return {label: c.name , value: c._id};
                });
            }
        }
    } 
}, { tracker: Tracker });

Schema.AccountType = new SimpleSchema({
    type:{
        type: String,
        label:"Type",
        max: 10,
        allowedValues: ['Teacher','Studant','Client','Supplier'],
        autoform: {
            
            options: [
              {label: "Teacher", value: 'Teacher'},
              {label: "Studant", value: 'Studant'},
              {label: "Client", value: 'Client'},
              {label: "Supplier", value: 'Supplier'},
            ]
        }
    }
    
}, { tracker: Tracker });

export const AccountSchema = new SimpleSchema({
    code:{
        type:Number,
        label:"Code",
        unique: true
    },
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    firstName:{
        type: String,
        label:"FirstName",
        max: 50
    },
    surname:{
        type:String,
        label: "Surname",
        max: 50
    },
    desc: {
        type: String,
        label: "Other Info",
        optional: true,
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 4,
            class: "materialize-textarea"
          }
        }
    },
    age:{
        type: Number,
        label:"Age"
    },
    birthDate:{
        type: Date,
        label: "Birth Date"
    },
    address:{
        type: String,
        label:"Adress"
    },
    email:{
        type: String,
        label:"Email",
        optional:true,
        regEx: SimpleSchema.RegEx.Email
    },
    academicLevel:{
        type: String,
        label: "Academic Level",
        max:5,
        optional:true
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
    otherContact:{
        type:String,
        label:"Other Contact",
        max: 20,
        optional:true
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
    picture: {
        type: String,
        optional:true,
        autoform: {
          afFieldInput: {
            type: 'fileUpload',
            collection: 'Images',
            //uploadTemplate: 'uploadField', // <- Optional
            //previewTemplate: 'myFilePreview', // <- Optional
            insertConfig: { // <- Optional, .insert() method options, see: https://github.com/VeliovGroup/Meteor-Files/wiki/Insert-(Upload)
              meta: {},
              isBase64: false,
              transport: 'ddp',
              streams: 'dynamic',
              chunkSize: 'dynamic',
              allowWebWorkers: true
            }
          }
        }
    },
    relationships:{
        type:Array,
        label: "Relationships",
        optional: true
    },
    "relationships.$":{
        type: Schema.AccountRelationship

    },
    status:{
        type: String,
        label: "Status",
        defaultValue:"Active",
        allowedValues: ['Active','Contact','Expired',''],
        autoform: {
            
            options: [
              {label: "Active", value: 'Active'},
              {label: "Contact", value: 'Contact'}
            ]
        }

    },
    type:{
        type: Array,
        label:"Type",
        optional:true
    },
    "type.$":{
        type: Schema.AccountType
    }
}, { tracker: Tracker });

/**
 *  Accounts Collection
 *  Store file asset paths or contents in a Collection
 */

Accounts = new Mongo.Collection('accounts');

Accounts.allow({
 insert: function(userId, doc){
  return !!userId;
 },
 update: function(userId, doc){
  return !!userId;
 }
});

Accounts.attachSchema(AccountSchema);
