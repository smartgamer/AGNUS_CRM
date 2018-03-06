import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

Academic_Year = new Mongo.Collection('academic_Year');

export const Academic_YearSchema = new SimpleSchema({
    code:{
        type:String,
        label:"Codigo",
        unique: true
    },
    desc:{
        type:String,
        label:"Descrição"
    },
    begin: {
        type: Date,
        label: "Inicio"
    },
    end:{
        type: Date,
        label:"Fim"
    },
    status:{
        type: String,
        label: "Status",
        defaultValue:"Active",
        allowedValues: ['Active','Inactive','Canceled',''],
        autoform: {
            
            options: [
              {label: "Activo", value: 'Active'},
              {label: "Inactivo", value: 'Inactive'},
              {label: "Cancelado", value: 'Canceled'},
            ]
        }

    }
}, { tracker: Tracker });

Academic_Year.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Academic_Year.attachSchema(Academic_YearSchema);