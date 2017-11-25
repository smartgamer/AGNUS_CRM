import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.QoutaSchema = new SimpleSchema({
    code: {
        type: String,
        label: "Code",
        max: 10
    },
    year: {
        type: String,
        label: "Year",
        defaultValue: Date.now.year
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
    type: {
        type: String,
        label: 'Type',
        allowedValues: ['Percentagem', 'Valor'],
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
