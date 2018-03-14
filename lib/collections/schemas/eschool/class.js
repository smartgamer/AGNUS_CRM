import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Classes = new Mongo.Collection('classes');

export const ClassesSchema = new SimpleSchema({
    code:{
        type:String,
        label:"Codigo",
        unique: true
    },
    desc:{
        type:String,
        label:"Descrição",
        max:25
    },
    limit:{
        type:Number,
        label:"Limite Alunos"
    },
    grade: {
        type: String,
        label: "Classe",
        max: 10,
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                return Grades.find({}, {
                    sort: {
                        code: 1
                    }
                }).map(function (c) {
                    return { label: c.desc, value: c.code };
                });
            }
        }
    },
}, { tracker: Tracker });

Classes.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Classes.attachSchema(ClassesSchema);