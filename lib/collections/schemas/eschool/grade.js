import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Grades = new Mongo.Collection('grade');

export const GradesSchema = new SimpleSchema({
    code:{
        type:String,
        label:"Codigo",
        unique: true
    },
    name:{
        type:String,
        label:"Nome",
        max:25
    },
    desc:{
        type:String,
        label:"Descrição"
    },
    grade: {
        type: String,
        label: "Classe"
    }
}, { tracker: Tracker });

Grades.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Grades.attachSchema(GradesSchema);