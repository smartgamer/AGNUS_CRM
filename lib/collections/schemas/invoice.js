import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.InvoiceItem = new SimpleSchema({
    product: {
        type: String,
        label: "Produto",
        autoform: {
            type: "select",
            options: function () {
                return Products.find({}, {
                    sort: {
                        desc: 1
                    }
                }).map(function (c) {
                    return { label: c.desc, value: c._id };
                });
            }
        }
    },
    desc: {
        type: String,
        label: "Descrição",
        max: 50
    },
    quantity: {
        type: Number,
        label: "Qnt.",
        defaultValue: 1
    },
    unitPrice:{
        type:Number,
        label:"Preço Unitario",
        defaultValue:0
    }
}, { tracker: Tracker });

Schema.InvoiceSchema = new SimpleSchema({
    qoute: {
        type: String,
        label: "Cota",
        optional: true,
        autoform: {
            type: "select",
            options: function () {
                return Qoutas.find({}, {
                    sort: {
                        desc: 1
                    }
                }).map(function (c) {
                    return { label: c.desc, value: c._id };
                });
            }
        }
    },
    entity: {
        type: String,
        label: "Membro",
        autoform: {
            type: "select",
            options: function () {
                return Accounts.find({}, {
                    sort: {
                        desc: 1
                    }
                }).map(function (c) {
                    return { label: c.name, value: c._id };
                });
            }
        }
    },
    number: {
        type: Number,
        label: "Nr.",
    },
    serie: {
        type: Number,
        label: "Serie",
        optional:true
    },
    document: {
        type: String,
        label: "Documento",
        max: 20,
        optional:true
    },
    type: {
        type: String,
        label: "Tipo",
        max: 10
    },
    date: {
        type: Date,
        label: "Data"
    },
    totalAmount: {
        type: Number,
        label: "Total",
        min: 0
    },
    item: {
        type: Array,
        optional: true,
        label:"Linhas"
    },
    "item.$": {
        type: Schema.InvoiceItem,
        label:"Linhas"
    },
    status: {
        type: String,
        label: "Estatuto",
        allowedValues: ['Por Pagar', 'Pago', 'Fechado', 'Cancelado'],
        autoform: {

            options: [
                { label: "Por Pagar", value: 'Por Pagar' },
                { label: "Pago", value: 'Pago' },
                { label: "Fechado", value: 'Fechado' },
                { label: "Cancelado", value: 'Cancelado' },
            ]
        },
        defaultValue: "Por Pagar"
    }
}, { tracker: Tracker });

Invoices = new Mongo.Collection('invoices');

Invoices.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    },
    remove: function () {
        return true;
    }
});

Invoices.attachSchema(Schema.InvoiceSchema);