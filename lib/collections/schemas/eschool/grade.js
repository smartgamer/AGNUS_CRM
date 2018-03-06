import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Grade = new Mongo.Collection('grade');

export const GradeSchema = new SimpleSchema({
    code:{
        type:String,
        label:"Codigo",
        unique: true
    },
    desc:{
        type:String,
        label:"Descrição"
    },
    grade: {
        type: Date,
        label: "Inicio"
    }
}, { tracker: Tracker });

Grade.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Grade.attachSchema(GradeSchema);