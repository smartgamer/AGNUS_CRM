import SimpleSchema from 'simpl-schema';

Schema = {};

Schema.InvoiceItem = new SimpleSchema({
    product: {
        type: String,
        label: "Product",
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
        label: "Description",
        max: 50
    },
    quantity: {
        type: Number,
        label: "Quantity",
        defaultValue: 1
    },
    unitPrice:{
        type:Number,
        label:"Unit Price",
        defaultValue:0
    }
}, { tracker: Tracker });

Schema.InvoiceSchema = new SimpleSchema({
    qoute: {
        type: String,
        label: "Qoute",
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
        label: "Entidade",
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
        label: "Number",
    },
    serie: {
        type: Number,
        label: "Serie"
    },
    document: {
        type: String,
        label: "Document",
        max: 20
    },
    type: {
        type: String,
        label: "Type",
        max: 10
    },
    date: {
        type: Date,
        label: "Invoice Date"
    },
    totalAmount: {
        type: Number,
        label: "Total Amount",
        min: 0
    },
    item: {
        type: Array,
        optional: true
    },
    "item.$": {
        type: Schema.InvoiceItem
    },
    status: {
        type: String,
        label: "Status",
        allowedValues: ['Open', 'Paid', 'Closed', 'Canceled'],
        autoform: {

            options: [
                { label: "Open", value: 'Open' },
                { label: "Paid", value: 'Paid' },
                { label: "Closed", value: 'Closed' },
                { label: "Canceled", value: 'Canceled' },
            ]
        },
        defaultValue: "Open"
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