import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Customers = new Mongo.Collection('customers');

Customers.allow({
    insert: function(userId, doc){
     return !!userId;
    },
    update: function(userId, doc){
     return !!userId;
    }
});

Schema = {};

Schema.CustomersSchema = new SimpleSchema({
    
    code:{
        type:String,
        label:"Code"
     },
     name: {
      type: String,
      label: "Name",
        max: 20
     },
    desc: {
      type: String,
      label: "Description",
      optional: true
     },
     email:{
        type: String,
        label:"Email",
        optional:true
     },
    contact:{
        type:String,
        label:"Contact Principal",
        max: 20,
        optional:true
    },
    telphone:{
        type:String,
        label:"Telphone Principal",
            max: 20
    },
    fax:{
        type:String,
        label:"Fax",
        max: 20,
        optional:true
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
     productPriceVariant:{
           type: String,
           label: "PVP",
           allowedValues: ['PVP1','PVP2','PVP3','PVP4','PVP5','PVP6'],
           autoform: {    
            options: [
                    {label: "PVP1", value: 'PVP1'},
                    {label: "PVP2", value: 'PVP2'}, 
                    {label: "PVP3", value: 'PVP3'},
                    {label: "PVP4", value: 'PVP4'},
                    {label: "PVP5", value: 'PVP5'}, 
                    {label: "PVP6", value: 'PVP6'},
                ]
            }
        
       }
});

Customers.attachSchema(Schema.CustomersSchema );