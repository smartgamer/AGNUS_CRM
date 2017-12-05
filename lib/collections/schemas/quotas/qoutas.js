import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.QoutaSchema = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        max: 10
    },
    desc:{
        type: String,
        label: "Description",
        max: 30
    },
    year: {
        type: Number,
        label: "Year",
        defaultValue: Date.now.year,
        min: 2017
    },
    begin: {
        type: Date,
        label: "Begin",
        optional: true
    },
    end: {
        type: Date,
        label: "End",
        optional: true
    },
    rule: {
        type: String,
        label: "Rule",
        optional: true
    },
    frequency: {
        type: String,
        label: "Frequency",
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
        label: 'Type',
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
        label: 'Value',
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
