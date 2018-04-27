import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Schema.AcademicLevel = new SimpleSchema({
    code: {
        type: String,
        label: "Codigo",
        max: 10,
        unique: true
    },
    desc:{
        type: String,
        label: "Description",
        max: 70
    },
    codigoQD:{
        type:String,
        label:"Código Quadro Pessoal",
        max:10
    }
}, { tracker: Tracker });

AcademicLevel = new Mongo.Collection('academicLevel');

AcademicLevel.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

AcademicLevel.attachSchema(Schema.AcademicLevel);
