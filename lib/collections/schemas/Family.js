import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Familys = new Mongo.Collection('familys');

Familys.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    },
    remove: function () {
        return true;
    }
});

Schema = {};

Schema.FamilyShema = new SimpleSchema({
    family:{
        type: String,
        label: "Family",
        optional: false,
        max:20
    },
    desc:{
        type: String,
        label: "Description",
        max:50
    },
    summary:{
        type: String,
        label: "Brief summary",
        optional: true,
        max:1000
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

Familys.attachSchema(Schema.FamilyShema);