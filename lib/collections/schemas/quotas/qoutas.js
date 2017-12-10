import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.QoutaSchema = new SimpleSchema({
    code: {
        type: String,
        label: "Codigo",
        max: 10
    },
    desc:{
        type: String,
        label: "Descrição",
        max: 30
    },
    year: {
        type: Number,
        label: "Ano",
        defaultValue: Date.now.year,
        min: 2017
    },
    begin: {
        type: Date,
        label: "Inicio",
        optional: true
    },
    end: {
        type: Date,
        label: "Fim",
        optional: true
    },
    rule: {
        type: String,
        label: "Rule",
        optional: true
    },
    frequency: {
        type: String,
        label: "Frequencia",
        allowedValues: ['Mensal', 'Anual'],
        defaultValue:'Mensal',
        autoform: {
            options: [
                { label: "Mensal", value: 'Mensal' },
                { label: "Anual", value: 'Anual' },
            ]
        },
        optional: true
    },
    type: {
        type: String,
        label: 'Tipo',
        allowedValues: ['Percentagem', 'Valor'],
        defaultValue:'Percentagem',
        autoform: {
            options: [
                { label: "Percentagem", value: 'Percentagem' },
                { label: "Valor", value: 'Valor' },
            ]
        }
    },
    value: {
        type: Number,
        label: 'Valor',
        optional: true
    }

}, { tracker: Tracker });

Qoutas = new Mongo.Collection('qoutas');

Qoutas.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Qoutas.attachSchema(Schema.QoutaSchema);
