import SimpleSchema from 'simpl-schema';
import { Stream } from 'stream';

SimpleSchema.extendOptions(['autoform']);

export const BankSchema = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        unique: true,
        max: 5
    },

    desc: {
        type: String,
        label:"Description",
        max:50
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
        autoValue() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            }
            return this.unset();
        }
    },

    updatedAt: {
        type: Date,
        autoValue() {
            if (this.isUpdate) {
                return new Date();
            }
            return this.unset();
        },
        //denyInsert: true,
        optional: true
    },
    codeDirectDebit:{
        type: String,
        optional:true,
        label:"Codigo Cash Direto"
    },
    website:{
        type: String,
        optional:true,
        label: "WebSite"
    },
    contact:{
        type: String,
        optional:true,
        label: "Contacto Geral",
        max:20
    },
    notes:{
        type: String,
        optional:true,
        label:"Notas",
        autoform: {
          afFieldInput: {
            type: "textarea",
            rows: 4,
            class: "materialize-textarea"
          }
        }
    },
    email:{
        type: String,
        optional:true,
        label: "Email Geral",
        max:20
    }
}, { tracker: Tracker });




/**
* Emails Collection
*/
Banks = new Mongo.Collection("banks");

Banks.allow({
    insert: function(userId, doc){
     return !!userId;
    },
    update: function(userId, doc){
     return !!userId;
    }
});


Banks.attachSchema(BankSchema);

Meteor.methods({
    deleteBank: function(id){
        Banks.remove(id);
    }
});